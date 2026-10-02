export function scrollState(top,height,viewport){const progress=Math.max(0,Math.min(1,-top/Math.max(1,height-viewport)));return {progress,intro:Math.max(0,1-progress*2.8),story:Math.max(0,Math.min(1,(progress-.38)*3))};}

export function phraseIndex(progress){return Math.min(2,Math.max(0,Math.floor(progress*3)));}
