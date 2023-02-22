function topla(){
    var top1,top2,hes;

    top1 = parseInt(document.getElementById("top_1").value);
    top2 = parseInt(document.getElementById("top_2").value);

    hes = top1 + top2;

    document.getElementById("textop").innerHTML = hes;
}

function cik(){
    var cik1,cik2,hes;

    cik1 = parseInt(document.getElementById("cik_1").value);
    cik2 = parseInt(document.getElementById("cik_2").value);

    hes = cik1 - cik2;

    document.getElementById("texcik").innerHTML = hes;
}

function carp(){
    var carp1,carp2,hes;

    carp1 = parseInt(document.getElementById("carp_1").value);
    carp2 = parseInt(document.getElementById("carp_2").value);

    hes = carp1 * carp2;

    document.getElementById("texcarp").innerHTML = hes;
}

function böl(){
    var böl1,böl2,hes;

    böl1 = parseInt(document.getElementById("böl_1").value);
    böl2 = parseInt(document.getElementById("böl_2").value);

    hes = böl1 / böl2;

    document.getElementById("texböl").innerHTML = hes;
}