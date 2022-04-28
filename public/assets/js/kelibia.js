function debut() {
    const t = document.querySelector('.grand_titre');
    const tx = document.querySelector('.petit_titre8');
    t.style.transform = "translateY(-100%)"
    tx.style.transform = "translateX(-120%)"
    t.style.opacity = "0"
    tx.style.opacity = "0"
}

function translate() {
    const t = document.querySelector('.grand_titre');
    const box = document.querySelector('.box');
    t.style.transform = "translateX(-50%)";
    box.style.transform = "translateX(50%)";
    t.style.opacity = "1";
    box.style.opacity = "1";
    t.style.transition = "1s";
    box.style.transition = "1s";
}

function translate1() {
    const t = document.querySelector('.grand_titre');
    t.style.transform = "translateX(-50%)";
    t.style.opacity = "1";
    t.style.transition = "1s";
}

function translate3() {
    const tx1 = document.querySelector('.petit_titre8');
    tx1.style.transform = "translateX(0%)";
    tx1.style.opacity = "1";
    tx1.style.transition = "1s";
}


let containerr = document.querySelector('.containerr');
let containermap = document.querySelector('.container_map');
let date1 = new Date();
var month = date1.getMonth();
var day = date1.getDate();
var year = date1.getFullYear();







if (month == "2" && day == "14" || month == "2" && day == "15" || month == "2" && day == "16" || month == "2" && day == "17" || month == "2" && day == "18" || month == "2" && day == "19" || month == "2" && day == "20") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie De Nuit De Kelibia </h2>");
    containermap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/dir//les+pharmacies+kelibia/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x131d33e98b8a1bff:0xda1b871b5079b52f?sa=X&ved=2ahUKEwi5-7mD1LH3AhX9RfEDHXtODt0Q9Rd6BAgFEAQ'  allowfullscreen='' loading='lazy'></iframe>")
}


if (month == "2" && day == "21" || month == "2" && day == "22" || month == "2" && day == "23" || month == "2" && day == "24" || month == "2" && day == "25" || month == "2" && day == "26" || month == "2" && day == "27") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Adel Gritli</h2>");
    containermap.innerHTML = ("<iframe class='map' src='<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d409814.793158806!2d10.634779!3d36.634135!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131d334dad1c93ef%3A0xc403ff4e0b888cab!2sPharmacie%20Adel%20Gritli!5e0!3m2!1sfr!2stn!4v1651114717386!5m2!1sfr!2stn' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>")
}

if (month == "2" && day == "28" || month == "2" && day == "29" || month == "2" && day == "30" || month == "2" && day == "31" || month == "3" && day == "1" || month == "3" && day == "2" || month == "3" && day == "3") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Hadid Mohamed</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/dir/36.8607232,10.2662144/les+pharmacies+kelibia/@36.6328225,10.078844a' loading='lazy'></iframe>")
}

if (month == "3" && day == "4" || month == "3" && day == "5" || month == "3" && day == "6" || month == "3" && day == "7" || month == "3" && day == "8" || month == "3" && day == "9" || month == "3" && day == "10") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie De Nuit De Kelibia </h2>");
    containermap.innerHTML = ("<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d409121.60621158045!2d10.62683592865983!3d36.76426854664357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302caae9a88b655%3A0x5d8a05916cd0e317!2sPharmacie%20Gadhoum!5e0!3m2!1sfr!2stn!4v1651114090948!5m2!1sfr!2stn' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>")
}





if (month == "3" && day == "11" || month == "3" && day == "12" || month == "3" && day == "13" || month == "3" && day == "14" || month == "3" && day == "15" || month == "3" && day == "16" || month == "3" && day == "17") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Adel Gritli</h2>");
    containermap.innerHTML = ("<iframe class='map' src='<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d409814.793158806!2d10.634779!3d36.634135!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131d334dad1c93ef%3A0xc403ff4e0b888cab!2sPharmacie%20Adel%20Gritli!5e0!3m2!1sfr!2stn!4v1651114717386!5m2!1sfr!2stn' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>")
}

if (month == "3" && day == "18" || month == "3" && day == "19" || month == "3" && day == "20" || month == "3" && day == "21" || month == "3" && day == "22" || month == "3" && day == "23" || month == "3" && day == "24") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Hadid Mohamed</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/dir/36.8607232,10.2662144/les+pharmacies+kelibia/@36.6328225,10.078844a' loading='lazy'></iframe>")
}

if (month == "3" && day == "25" || month == "3" && day == "26" || month == "3" && day == "27" || month == "3" && day == "28" || month == "3" && day == "29" || month == "3" && day == "30" || month == "4" && day == "1") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie De Nuit De Kelibia </h2>");
    containermap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/dir//les+pharmacies+kelibia/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x131d33e98b8a1bff:0xda1b871b5079b52f?sa=X&ved=2ahUKEwi5-7mD1LH3AhX9RfEDHXtODt0Q9Rd6BAgFEAQ'  allowfullscreen='' loading='lazy'></iframe>")
}





if (month == "4" && day == "2" || month == "4" && day == "3" || month == "4" && day == "4" || month == "4" && day == "5" || month == "4" && day == "6" || month == "4" && day == "7" || month == "4" && day == "8") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Adel Gritli</h2>");
    containermap.innerHTML = ("<iframe class='map' src='<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d409814.793158806!2d10.634779!3d36.634135!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131d334dad1c93ef%3A0xc403ff4e0b888cab!2sPharmacie%20Adel%20Gritli!5e0!3m2!1sfr!2stn!4v1651114717386!5m2!1sfr!2stn' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>")
}

if (month == "4" && day == "9" || month == "4" && day == "10" || month == "4" && day == "11" || month == "4" && day == "12" || month == "4" && day == "13" || month == "4" && day == "14" || month == "4" && day == "15") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Hadid Mohamed</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/dir/36.8607232,10.2662144/les+pharmacies+kelibia/@36.6328225,10.078844a' loading='lazy'></iframe>")
}

if (month == "4" && day == "16" || month == "4" && day == "17" || month == "4" && day == "18" || month == "4" && day == "19" || month == "4" && day == "20" || month == "4" && day == "21" || month == "4" && day == "22") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie De Nuit De Kelibia </h2>");
    containermap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/dir//les+pharmacies+kelibia/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x131d33e98b8a1bff:0xda1b871b5079b52f?sa=X&ved=2ahUKEwi5-7mD1LH3AhX9RfEDHXtODt0Q9Rd6BAgFEAQ'  allowfullscreen='' loading='lazy'></iframe>")
}






if (month == "4" && day == "23" || month == "4" && day == "24" || month == "4" && day == "25" || month == "4" && day == "26" || month == "4" && day == "27" || month == "4" && day == "28" || month == "4" && day == "29") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Adel Gritli</h2>");
    containermap.innerHTML = ("<iframe class='map' src='<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d409814.793158806!2d10.634779!3d36.634135!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131d334dad1c93ef%3A0xc403ff4e0b888cab!2sPharmacie%20Adel%20Gritli!5e0!3m2!1sfr!2stn!4v1651114717386!5m2!1sfr!2stn' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>")
}

if (month == "4" && day == "30" || month == "4" && day == "31" || month == "5" && day == "1" || month == "5" && day == "2" || month == "5" && day == "3" || month == "5" && day == "4" || month == "5" && day == "5") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Hadid Mohamed</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/dir/36.8607232,10.2662144/les+pharmacies+kelibia/@36.6328225,10.078844a' loading='lazy'></iframe>")
}

if (month == "5" && day == "6" || month == "5" && day == "7" || month == "5" && day == "8" || month == "5" && day == "9" || month == "5" && day == "10" || month == "5" && day == "11" || month == "5" && day == "12") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie De Nuit De Kelibia </h2>");
    containermap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/dir//les+pharmacies+kelibia/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x131d33e98b8a1bff:0xda1b871b5079b52f?sa=X&ved=2ahUKEwi5-7mD1LH3AhX9RfEDHXtODt0Q9Rd6BAgFEAQ'  allowfullscreen='' loading='lazy'></iframe>")
}





if (month == "5" && day == "13" || month == "5" && day == "14" || month == "5" && day == "15" || month == "5" && day == "16" || month == "5" && day == "17" || month == "5" && day == "18" || month == "5" && day == "19") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Adel Gritli</h2>");
    containermap.innerHTML = ("<iframe class='map' src='<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d409814.793158806!2d10.634779!3d36.634135!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131d334dad1c93ef%3A0xc403ff4e0b888cab!2sPharmacie%20Adel%20Gritli!5e0!3m2!1sfr!2stn!4v1651114717386!5m2!1sfr!2stn' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>")
}

if (month == "5" && day == "20" || month == "5" && day == "21" || month == "5" && day == "22" || month == "5" && day == "23" || month == "5" && day == "24" || month == "5" && day == "25" || month == "5" && day == "26") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Hadid Mohamed</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/dir/36.8607232,10.2662144/les+pharmacies+kelibia/@36.6328225,10.078844a' loading='lazy'></iframe>")
}

if (month == "5" && day == "27" || month == "5" && day == "28" || month == "5" && day == "29" || month == "5" && day == "30" || month == "6" && day == "1" || month == "6" && day == "2" || month == "6" && day == "3") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie De Nuit De Kelibia </h2>");
    containermap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/dir//les+pharmacies+kelibia/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x131d33e98b8a1bff:0xda1b871b5079b52f?sa=X&ved=2ahUKEwi5-7mD1LH3AhX9RfEDHXtODt0Q9Rd6BAgFEAQ'  allowfullscreen='' loading='lazy'></iframe>")
}





if (month == "6" && day == "4" || month == "6" && day == "5" || month == "6" && day == "6" || month == "6" && day == "7" || month == "6" && day == "8" || month == "6" && day == "9" || month == "6" && day == "10") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Adel Gritli</h2>");
    containermap.innerHTML = ("<iframe class='map' src='<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d409814.793158806!2d10.634779!3d36.634135!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131d334dad1c93ef%3A0xc403ff4e0b888cab!2sPharmacie%20Adel%20Gritli!5e0!3m2!1sfr!2stn!4v1651114717386!5m2!1sfr!2stn' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>")
}

if (month == "6" && day == "11" || month == "6" && day == "12" || month == "6" && day == "13" || month == "6" && day == "14" || month == "6" && day == "15" || month == "6" && day == "16" || month == "6" && day == "17") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Hadid Mohamed</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/dir/36.8607232,10.2662144/les+pharmacies+kelibia/@36.6328225,10.078844a' loading='lazy'></iframe>")
}

if (month == "6" && day == "18" || month == "6" && day == "19" || month == "6" && day == "20" || month == "6" && day == "21" || month == "6" && day == "22" || month == "6" && day == "23" || month == "6" && day == "24") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie De Nuit De Kelibia </h2>");
    containermap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/dir//les+pharmacies+kelibia/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x131d33e98b8a1bff:0xda1b871b5079b52f?sa=X&ved=2ahUKEwi5-7mD1LH3AhX9RfEDHXtODt0Q9Rd6BAgFEAQ'  allowfullscreen='' loading='lazy'></iframe>")
}




if (month == "6" && day == "25" || month == "6" && day == "26" || month == "6" && day == "27" || month == "6" && day == "28" || month == "6" && day == "29" || month == "6" && day == "30" || month == "6" && day == "31") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Adel Gritli</h2>");
    containermap.innerHTML = ("<iframe class='map' src='<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d409814.793158806!2d10.634779!3d36.634135!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131d334dad1c93ef%3A0xc403ff4e0b888cab!2sPharmacie%20Adel%20Gritli!5e0!3m2!1sfr!2stn!4v1651114717386!5m2!1sfr!2stn' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>")
}

if (month == "7" && day == "1" || month == "7" && day == "2" || month == "7" && day == "3" || month == "7" && day == "4" || month == "7" && day == "5" || month == "7" && day == "6" || month == "7" && day == "7") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Hadid Mohamed</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/dir/36.8607232,10.2662144/les+pharmacies+kelibia/@36.6328225,10.078844a' loading='lazy'></iframe>")
}

if (month == "7" && day == "8" || month == "7" && day == "9" || month == "7" && day == "10" || month == "7" && day == "11" || month == "7" && day == "12" || month == "7" && day == "13" || month == "7" && day == "14") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie De Nuit De Kelibia </h2>");
    containermap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/dir//les+pharmacies+kelibia/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x131d33e98b8a1bff:0xda1b871b5079b52f?sa=X&ved=2ahUKEwi5-7mD1LH3AhX9RfEDHXtODt0Q9Rd6BAgFEAQ'  allowfullscreen='' loading='lazy'></iframe>")
}





if (month == "7" && day == "15" || month == "7" && day == "16" || month == "7" && day == "17" || month == "7" && day == "18" || month == "7" && day == "19" || month == "7" && day == "20" || month == "7" && day == "21") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Adel Gritli</h2>");
    containermap.innerHTML = ("<iframe class='map' src='<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d409814.793158806!2d10.634779!3d36.634135!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131d334dad1c93ef%3A0xc403ff4e0b888cab!2sPharmacie%20Adel%20Gritli!5e0!3m2!1sfr!2stn!4v1651114717386!5m2!1sfr!2stn' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>")
}

if (month == "7" && day == "22" || month == "7" && day == "23" || month == "7" && day == "24" || month == "7" && day == "25" || month == "7" && day == "26" || month == "7" && day == "27" || month == "7" && day == "28") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Hadid Mohamed</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/dir/36.8607232,10.2662144/les+pharmacies+kelibia/@36.6328225,10.078844a' loading='lazy'></iframe>")
}

if (month == "7" && day == "29" || month == "7" && day == "30" || month == "7" && day == "31" || month == "8" && day == "1" || month == "8" && day == "2" || month == "8" && day == "3" || month == "8" && day == "4") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie De Nuit De Kelibia </h2>");
    containermap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/dir//les+pharmacies+kelibia/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x131d33e98b8a1bff:0xda1b871b5079b52f?sa=X&ved=2ahUKEwi5-7mD1LH3AhX9RfEDHXtODt0Q9Rd6BAgFEAQ'  allowfullscreen='' loading='lazy'></iframe>")
}





if (month == "8" && day == "5" || month == "8" && day == "6" || month == "8" && day == "7" || month == "8" && day == "8" || month == "8" && day == "9" || month == "8" && day == "10" || month == "8" && day == "11") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Adel Gritli</h2>");
    containermap.innerHTML = ("<iframe class='map' src='<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d409814.793158806!2d10.634779!3d36.634135!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131d334dad1c93ef%3A0xc403ff4e0b888cab!2sPharmacie%20Adel%20Gritli!5e0!3m2!1sfr!2stn!4v1651114717386!5m2!1sfr!2stn' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>")
}

if (month == "8" && day == "12" || month == "8" && day == "13" || month == "8" && day == "14" || month == "8" && day == "15" || month == "8" && day == "16" || month == "8" && day == "17" || month == "8" && day == "18") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Hadid Mohamed</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/dir/36.8607232,10.2662144/les+pharmacies+kelibia/@36.6328225,10.078844a' loading='lazy'></iframe>")
}

if (month == "8" && day == "19" || month == "8" && day == "20" || month == "8" && day == "21" || month == "8" && day == "22" || month == "8" && day == "23" || month == "8" && day == "24" || month == "8" && day == "25") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie De Nuit De Kelibia </h2>");
    containermap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/dir//les+pharmacies+kelibia/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x131d33e98b8a1bff:0xda1b871b5079b52f?sa=X&ved=2ahUKEwi5-7mD1LH3AhX9RfEDHXtODt0Q9Rd6BAgFEAQ'  allowfullscreen='' loading='lazy'></iframe>")
}





if (month == "8" && day == "26" || month == "8" && day == "27" || month == "8" && day == "28" || month == "8" && day == "29" || month == "8" && day == "30" || month == "9" && day == "1" || month == "9" && day == "2") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Adel Gritli</h2>");
    containermap.innerHTML = ("<iframe class='map' src='<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d409814.793158806!2d10.634779!3d36.634135!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131d334dad1c93ef%3A0xc403ff4e0b888cab!2sPharmacie%20Adel%20Gritli!5e0!3m2!1sfr!2stn!4v1651114717386!5m2!1sfr!2stn' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>")
}

if (month == "9" && day == "3" || month == "9" && day == "4" || month == "9" && day == "5" || month == "9" && day == "6" || month == "9" && day == "7" || month == "9" && day == "8" || month == "9" && day == "9") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Hadid Mohamed</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/dir/36.8607232,10.2662144/les+pharmacies+kelibia/@36.6328225,10.078844a' loading='lazy'></iframe>")
}

if (month == "9" && day == "10" || month == "9" && day == "11" || month == "9" && day == "12" || month == "9" && day == "13" || month == "9" && day == "14" || month == "9" && day == "15" || month == "9" && day == "16") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie De Nuit De Kelibia </h2>");
    containermap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/dir//les+pharmacies+kelibia/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x131d33e98b8a1bff:0xda1b871b5079b52f?sa=X&ved=2ahUKEwi5-7mD1LH3AhX9RfEDHXtODt0Q9Rd6BAgFEAQ'  allowfullscreen='' loading='lazy'></iframe>")
}




if (month == "9" && day == "17" || month == "9" && day == "18" || month == "9" && day == "19" || month == "9" && day == "20" || month == "9" && day == "21" || month == "9" && day == "22" || month == "9" && day == "23") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Adel Gritli</h2>");
    containermap.innerHTML = ("<iframe class='map' src='<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d409814.793158806!2d10.634779!3d36.634135!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131d334dad1c93ef%3A0xc403ff4e0b888cab!2sPharmacie%20Adel%20Gritli!5e0!3m2!1sfr!2stn!4v1651114717386!5m2!1sfr!2stn' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>")
}

if (month == "9" && day == "24" || month == "9" && day == "25" || month == "9" && day == "26" || month == "9" && day == "27" || month == "9" && day == "28" || month == "9" && day == "29" || month == "9" && day == "30") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Hadid Mohamed</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/dir/36.8607232,10.2662144/les+pharmacies+kelibia/@36.6328225,10.078844a' loading='lazy'></iframe>")
}

if (month == "9" && day == "31" || month == "10" && day == "1" || month == "10" && day == "2" || month == "10" && day == "3" || month == "10" && day == "4" || month == "10" && day == "5" || month == "10" && day == "6") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie De Nuit De Kelibia </h2>");
    containermap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/dir//les+pharmacies+kelibia/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x131d33e98b8a1bff:0xda1b871b5079b52f?sa=X&ved=2ahUKEwi5-7mD1LH3AhX9RfEDHXtODt0Q9Rd6BAgFEAQ'  allowfullscreen='' loading='lazy'></iframe>")
}





if (month == "10" && day == "7" || month == "10" && day == "8" || month == "10" && day == "9" || month == "10" && day == "10" || month == "10" && day == "11" || month == "10" && day == "12" || month == "10" && day == "13") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Adel Gritli</h2>");
    containermap.innerHTML = ("<iframe class='map' src='<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d409814.793158806!2d10.634779!3d36.634135!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131d334dad1c93ef%3A0xc403ff4e0b888cab!2sPharmacie%20Adel%20Gritli!5e0!3m2!1sfr!2stn!4v1651114717386!5m2!1sfr!2stn' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>")
}

if (month == "10" && day == "14" || month == "10" && day == "15" || month == "10" && day == "16" || month == "10" && day == "17" || month == "10" && day == "18" || month == "10" && day == "19" || month == "10" && day == "20") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Hadid Mohamed</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/dir/36.8607232,10.2662144/les+pharmacies+kelibia/@36.6328225,10.078844a' loading='lazy'></iframe>")
}

if (month == "10" && day == "21" || month == "10" && day == "22" || month == "10" && day == "23" || month == "10" && day == "24" || month == "10" && day == "25" || month == "10" && day == "26" || month == "10" && day == "27") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie De Nuit De Kelibia </h2>");
    containermap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/dir//les+pharmacies+kelibia/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x131d33e98b8a1bff:0xda1b871b5079b52f?sa=X&ved=2ahUKEwi5-7mD1LH3AhX9RfEDHXtODt0Q9Rd6BAgFEAQ'  allowfullscreen='' loading='lazy'></iframe>")
}





if (month == "10" && day == "28" || month == "10" && day == "29" || month == "10" && day == "30" || month == "11" && day == "1" || month == "11" && day == "2" || month == "11" && day == "3" || month == "11" && day == "4") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Adel Gritli</h2>");
    containermap.innerHTML = ("<iframe class='map' src='<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d409814.793158806!2d10.634779!3d36.634135!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131d334dad1c93ef%3A0xc403ff4e0b888cab!2sPharmacie%20Adel%20Gritli!5e0!3m2!1sfr!2stn!4v1651114717386!5m2!1sfr!2stn' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>")
}

if (month == "11" && day == "5" || month == "11" && day == "6" || month == "11" && day == "7" || month == "11" && day == "8" || month == "11" && day == "9" || month == "11" && day == "10" || month == "11" && day == "11") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Hadid Mohamed</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/dir/36.8607232,10.2662144/les+pharmacies+kelibia/@36.6328225,10.078844a' loading='lazy'></iframe>")
}

if (month == "11" && day == "12" || month == "11" && day == "13" || month == "11" && day == "14" || month == "11" && day == "15" || month == "11" && day == "16" || month == "11" && day == "17" || month == "11" && day == "18") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie De Nuit De Kelibia </h2>");
    containermap.innerHTML = ("  <iframe class='map' src='https://www.google.com/maps/dir//les+pharmacies+kelibia/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x131d33e98b8a1bff:0xda1b871b5079b52f?sa=X&ved=2ahUKEwi5-7mD1LH3AhX9RfEDHXtODt0Q9Rd6BAgFEAQ'  allowfullscreen='' loading='lazy'></iframe>")
}




if (month == "11" && day == "19" || month == "11" && day == "20" || month == "11" && day == "21" || month == "11" && day == "22" || month == "11" && day == "23" || month == "11" && day == "24" || month == "11" && day == "25") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Adel Gritli</h2>");
    containermap.innerHTML = ("<iframe class='map' src='<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d409814.793158806!2d10.634779!3d36.634135!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131d334dad1c93ef%3A0xc403ff4e0b888cab!2sPharmacie%20Adel%20Gritli!5e0!3m2!1sfr!2stn!4v1651114717386!5m2!1sfr!2stn' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>")
}

if (month == "11" && day == "26" || month == "11" && day == "27" || month == "11" && day == "28" || month == "11" && day == "29" || month == "11" && day == "30" || month == "0" && day == "1" && year == "2023") {
    containerr.innerHTML = ("<h2 class='petit_titre8'>Pharmacie Ben Hadid Mohamed</h2>");
    containermap.innerHTML = ("<iframe class='map' src='https://www.google.com/maps/dir/36.8607232,10.2662144/les+pharmacies+kelibia/@36.6328225,10.078844a' loading='lazy'></iframe>")
}