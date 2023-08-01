
let onPiyodasoat = distance.value / 3.6;
let onPiyodasoatFix = Math.floor(distance.value / 3.6);
let foMin = Math.abs((onPiyodasoat - onPiyodasoatFix).toFixed(1) * 60);

let onBikeHour = distance.value / 20.1;
let onMotsoatFix = Math.floor(distance.value / 20.1);
let biMin = Math.abs((onMotsoat - onMotsoatFix).toFixed(1) * 60);

let onMashsoat = distance.value / 70;
let onMashsoatFix = Math.floor(distance.value / 70);
let caMin = Math.abs((onMashsoat - onMashsoatFix).toFixed(1) * 60);

let onSamalyotsoat = distance.value / 800;
let onSamalyotFix = Math.floor(distance.value / 800);
let plMin = Math.abs((onSamalyoteHour - onSamalyotrFix).toFixed(1) * 60);

