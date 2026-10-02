"""Build and validate the Northframe PDF forms. Run from any working directory."""
from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, white
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from pypdf import PdfReader, PdfWriter
import tempfile

ROOT = Path(__file__).resolve().parent
FONT = ROOT.parent / 'Fonts'
for name, file in [('Display', 'CabinetGrotesk-Bold.ttf'), ('Body', 'Satoshi-Regular.ttf'), ('Medium', 'Satoshi-Medium.ttf')]:
    pdfmetrics.registerFont(TTFont(name, str(FONT / file)))
INK, CORAL, GRAY = map(HexColor, ['#111214', '#FE7141', '#545B65'])
W, H = 612, 792

def line(c, text, x, y, font='Body', size=10, color=INK):
    c.setFillColor(color); c.setFont(font, size); c.drawString(x, y, text)

def paragraph(c, text, y, width=516, size=10, color=GRAY, x=48):
    words, row = text.split(), ''
    for word in words:
        trial = f'{row} {word}'.strip()
        if pdfmetrics.stringWidth(trial, 'Body', size) > width:
            line(c, row, x, y, size=size, color=color); y -= size * 1.45; row = word
        else: row = trial
    if row: line(c, row, x, y, size=size, color=color)
    return y - size * 1.45

def page(c, title, subtitle, page_no, total, section):
    c.setFillColor(CORAL); c.rect(0, H-9, W, 9, fill=1, stroke=0)
    c.drawImage(str(ROOT.parent/'northframe-nf-black-transparent.png'), 25, 696, width=115, height=77, mask='auto')
    line(c, 'NORTHFRAME', 134, 732, 'Medium', 11)
    line(c, section.upper(), 48, 693, 'Medium', 9, GRAY)
    line(c, title, 48, 659, 'Display', 29)
    paragraph(c, subtitle, 637)
    c.setStrokeColor(HexColor('#D5D8DC')); c.line(48, 50, 564, 50)
    line(c, 'NORTHFRAME  /  WEBSITE DESIGN', 48, 32, 'Medium', 8, GRAY)
    c.setFont('Body', 8); c.drawRightString(564, 32, f'{page_no} / {total}')

def field(c, name, label, y, x=48, width=516, height=29, help='', required=False):
    line(c, label + (' *' if required else ' (optional)'), x, y, 'Medium', 10)
    top = y-9
    if help:
        top = paragraph(c, help, y-15, width, 8.5, x=x)-3
    bottom = top-height
    assert bottom > 65, f'Field below safe area: {name}'
    c.acroForm.textfield(name=name, tooltip=label + (' (required)' if required else ''),
        x=x,y=bottom,width=width,height=height,borderWidth=.7,borderStyle='solid',
        borderColor=HexColor('#8E939B'),fillColor=HexColor('#F7F8F9'),textColor=INK,
        fontName='Helvetica',fontSize=10,forceBorder=True,maxlen=1200 if height>35 else 160,
        fieldFlags=('multiline ' if height>35 else '')+('required' if required else ''))
    return bottom-25

def pair(c, a, b, y):
    ya=field(c,*a,y,x=48,width=246,required=True)
    yb=field(c,*b,y,x=318,width=246,required=True)
    return min(ya,yb)

def choice(c, name, label, options, y, required=True):
    line(c,label+(' *' if required else ' (optional)'),48,y,'Medium',10)
    for i, text in enumerate(options):
        by=y-25-i*22
        c.acroForm.radio(name=name,tooltip=label,value=f'option{i+1}',selected=False,
            x=49,y=by,size=12,buttonStyle='circle',borderWidth=.8,borderColor=GRAY,
            fillColor=white,textColor=INK,fieldFlags='radio noToggleToOff'+(' required' if required else ''))
        line(c,text,70,by+2,size=10)
    return by-26

def start(filename):
    c=canvas.Canvas(str(ROOT/filename),pagesize=(W,H))
    c.setAuthor('Northframe'); c.setTitle(filename.replace('.pdf','').replace('-',' '))
    return c

c=start('Northframe-Project-Inquiry.pdf')
page(c,'Let\'s talk about your website.','Tell us about your business. Fill in this PDF, save a copy, and reply to the email you received with the completed file attached. Fields marked * are required.',1,1,'Project inquiry')
y=pair(c,('name','Your name'),('business','Business name'),584)
y=pair(c,('email','Email address'),('city','City and state'),y)
y=field(c,'phone','Phone number',y,help='Add a number if you would prefer a call.')
y=field(c,'website','Current website',y,help='Leave blank if you do not have a website yet.')
y=choice(c,'need','What do you need?', ['A new website','A redesign of my current website','I am not sure yet'],y)
y=field(c,'goals','What should your website do better?',y,height=58)
paragraph(c,'We will use these details to respond to your inquiry. Please do not include passwords or private customer information.',y+5,size=9)
c.showPage(); c.save()

c=start('Northframe-Website-Onboarding.pdf')
page(c,'Your business','Share the details for your website. Short answers are fine. Fields marked * are required. Save your completed PDF and return it by replying to our email.',1,4,'Website onboarding / 01')
y=field(c,'business_name','Business name for the website',580,required=True)
y=pair(c,('contact_name','Project contact name'),('contact_email','Project contact email'),y)
paragraph(c,'Project contact details are not published by default.',y+12,size=8.5)
y-=10
y=pair(c,('public_phone','Public business phone'),('inquiry_email','Email for website inquiries'),y)
y=choice(c,'publish_email','Show the inquiry email on the website?', ['Yes','No - use the contact form instead'],y)
y=field(c,'city_state','Primary city and state',y,required=True)
y=field(c,'service_areas','Service areas',y,height=47,help='List the cities or areas you actually serve.',required=True)
field(c,'public_address','Public address',y,width=306,help='Only if customers may visit; otherwise leave blank.')
y=field(c,'hours','Business hours',y,x=372,width=192,help='For example: Mon-Fri, 8am-5pm.')
c.showPage()

page(c,'Your services and story','Your package includes Home, Services, About, Reviews/Projects, and Contact. We will use your answers to prepare the first draft.',2,4,'Website onboarding / 02')
y=field(c,'services','Main services',581,height=100,help='List up to five main services, with the most important first.',required=True)
y=field(c,'about','About your business',y,height=100,help='Share facts about your team and approach. Only include dates or experience you can confirm.')
y=choice(c,'main_action','What should visitors do first?', ['Call us','Request an estimate through the form'],y)
y=field(c,'style','Style preferences',y,height=80,help='Brand colors, one or two website examples, or anything you would like us to avoid.')
c.showPage()

page(c,'Your images and evidence','Use approved materials only. You can share a folder link instead of attaching large files. Give viewing and download access; do not share passwords.',3,4,'Website onboarding / 03')
y=field(c,'assets_link','Logo and photo folder link',581)
y=field(c,'missing','What is still missing?',y,height=29,help='For example: logo, photos, business description, or project details. Write "Nothing" if ready.')
y=field(c,'project_details','Project details',y,height=60,help='Match photo filenames to the work shown and its general location. No customer addresses.')
y=field(c,'reviews','Review sources',y,height=45,help='Link to original reviews or your Google Business Profile. We will confirm what can be used.')
y=field(c,'credentials','Licenses, certifications, or warranties',y,height=60,help='Include evidence links and relevant conditions. Leave blank if not applicable.')
paragraph(c,'Missing information will be flagged for confirmation before publication.',y,size=9)
c.showPage()

page(c,'Setup and approval','Tell us about your existing setup. Launch dates are preferences; timing will be confirmed. Do not include passwords, payment details, or customer records.',4,4,'Website onboarding / 04')
field(c,'current_site','Current website',581,width=246)
y=field(c,'launch','Preferred launch date',581,x=318,width=246)
y=choice(c,'domain_status','Domain status', ['I own a domain','I need a domain','I am not sure'],y)
field(c,'domain','Domain name and provider',y,width=246,height=40,help='If you own a domain, add its name and provider.')
y=field(c,'email_setup','Business email setup',y,x=318,width=246,height=40,help='Uses this domain? Yes/No/Not sure. Add provider.')
y=field(c,'approver','Website approver name and email',y,required=True,help='Name one person who will collect feedback and approve the final version.')
# Preferred date is collected above; timing is confirmed separately.
y=field(c,'notes','Anything else we should know?',y,height=45,help='Mention existing features to preserve or details that still need confirmation.')
bottom=paragraph(c,'Your package includes one revision round. Please collect feedback into one list. We will ask for approval before publication. This form does not replace your agreement.',y+3,size=9)
c.acroForm.checkbox(name='confirmation',tooltip='Confirm checked details and authorization',x=49,y=bottom-19,size=13,
    borderWidth=.8,borderColor=GRAY,fillColor=white,textColor=INK,buttonStyle='check',fieldFlags='required')
paragraph(c,'I have checked these details, am authorized to share the materials, and have flagged anything that needs confirmation. *',bottom-8,width=488,x=72,size=9)
c.showPage();c.save()

# One repeatable check: field tree, geometry, and saved fill values.
for file in ROOT.glob('Northframe-*.pdf'):
    reader=PdfReader(file); fields=reader.get_fields()
    assert fields, f'No interactive fields: {file}'
    widgets=0
    for p in reader.pages:
        assert p.extract_text().strip()
        for ref in p.get('/Annots',[]):
            a=ref.get_object()
            if a.get('/Subtype')!='/Widget': continue
            widgets+=1
            x1,y1,x2,y2=map(float,a['/Rect'])
            assert 40<=x1<x2<=572 and 60<=y1<y2<=610,(file,a.get('/T'),a['/Rect'])
    sample=next(k for k,v in fields.items() if v.get('/FT')=='/Tx')
    writer=PdfWriter();writer.clone_document_from_reader(reader)
    writer.update_page_form_field_values(None,{sample:'Alex Morgan'},auto_regenerate=False)
    with tempfile.TemporaryDirectory() as tmp:
        path=Path(tmp)/'filled.pdf'
        with path.open('wb') as f: writer.write(f)
        assert PdfReader(path).get_fields()[sample]['/V']=='Alex Morgan'
    print(f'PASS {file.name}: {len(reader.pages)} pages, {len(fields)} fields, {widgets} widgets; save/reopen OK')

