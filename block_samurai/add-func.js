let el = document.getElementsByClassName('g'),
    pattern = 'www.sejuku.net/',
    ad;
if(document.querySelector("#vn1s0p1c0 > div > cite") != null){
    ad = document.querySelector("#vn1s0p1c0 > div > cite");
    if(ad.textContent == null);
    else if(ad.textContent == pattern){
        let rm = document.querySelector('#taw');
        rm.textContent = null;
    }
}
for(let item of el){
    let h,result;
    if(item.querySelector('div > div.rc > div.r > a') == null)continue;
    h = item.querySelector('div > div.rc > div.r > a');
    if(h.href == null)continue;
    result = h.href.match(pattern);
    if(result != null){
        item.textContent = null;
    }
}
