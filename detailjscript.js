function KostenTable(rows, cols){    
	this.rows = rows;
	this.cols = cols;
    var content = new Array(rows);
	for (var i = 0; i < content.length; ++i){
		content[i] = new Array(cols);
	}
        
    content[0][0]="Messe";
    content[0][1]="Selbstkosten";
    
    content[1][0]="CeBIT";
    content[1][1]="15 €";
        
    content[2][0]="ConHit";
    content[2][1]="50 €";
        
    content[3][0]="WebTech Con";
    content[3][1]="300 €";
        
    this.content=content;
        
        
	function draw(){
		document.write("<table>");
        for(var i=0;i<content.length;i++){
			document.write("<tr>");
            for(var j=0;j<content[i].length;j++){
                document.write("<td>"+content[i][j]+"</td>");
            }
            document.write("</tr>");
        }
        document.write("</table>");
	}
        
       draw();
}
function TeilnehmerTable1(rows, cols){
    this.rows = rows;
	this.cols = cols;
	var content = new Array(rows);
	for (var i = 0; i < content.length; ++i){
		content[i] = new Array(cols);
	}
    content[0][0]="Name";
    content[0][1]="Vorname";
    content[0][2]="Studiengang";
    content[0][3]="eMail";
    
    content[1][0]="Ackermann";
    content[1][1]="Arnold";
    content[1][2]="IB";
    content[1][3]="bla@bla.com";
        
    content[2][0]="Raab";
    content[2][1]="Anton";
    content[2][2]="UIB";
    content[2][3]="bla@bla.com";
        
    content[3][0]="Bohlen";
    content[3][1]="Achim";
    content[3][2]="IMB";
    content[3][3]="bla@bla.com";
        
    this.content=content;
        
        
	function draw(){
        document.write("<table>");
		for(var i=0;i<content.length;i++){
			document.write("<tr>");
            for(var j=0;j<content[i].length;j++){
				document.write("<td>"+content[i][j]+"</td>");
            }
            document.write("</tr>");
        }
        document.write("</table>");
	}
        
    draw();
}
function TeilnehmerTable2(rows, cols){
    this.rows = rows;
	this.cols = cols;
	var content = new Array(rows);
	for (var i = 0; i < content.length; ++i){
		content[i] = new Array(cols);
	}
    content[0][0]="Name";
    content[0][1]="Vorname";
    content[0][2]="Studiengang";
    content[0][3]="eMail";
    
    content[1][0]="Bäcker";
    content[1][1]="Berta";
    content[1][2]="IB";
    content[1][3]="bla@bla.com";
        
    content[2][0]="Bauer";
    content[2][1]="Bernd";
    content[2][2]="UIB";
    content[2][3]="bla@bla.com";
        
    content[3][0]="Bohlen";
    content[3][1]="Beate";
    content[3][2]="IMB";
    content[3][3]="bla@bla.com";
        
    this.content=content;
        
        
	function draw(){
        document.write("<table>");
		for(var i=0;i<content.length;i++){
			document.write("<tr>");
            for(var j=0;j<content[i].length;j++){
				document.write("<td>"+content[i][j]+"</td>");
            }
            document.write("</tr>");
        }
        document.write("</table>");
	}
        
    draw();
}
function TeilnehmerTable3(rows, cols){
    this.rows = rows;
	this.cols = cols;
	var content = new Array(rows);
	for (var i = 0; i < content.length; ++i){
		content[i] = new Array(cols);
	}
    content[0][0]="Name";
    content[0][1]="Vorname";
    content[0][2]="Studiengang";
    content[0][3]="eMail";
    
    content[1][0]="Jauch";
    content[1][1]="Claudia";
    content[1][2]="IB";
    content[1][3]="bla@bla.com";
        
    content[2][0]="Raab";
    content[2][1]="Stefan";
    content[2][2]="UIB";
    content[2][3]="bla@bla.com";
        
    content[3][0]="Bohlen";
    content[3][1]="Dieter";
    content[3][2]="IMB";
    content[3][3]="bla@bla.com";
        
    this.content=content;
        
        
	function draw(){
        document.write("<table>");
		for(var i=0;i<content.length;i++){
			document.write("<tr>");
            for(var j=0;j<content[i].length;j++){
				document.write("<td>"+content[i][j]+"</td>");
            }
            document.write("</tr>");
        }
        document.write("</table>");
	}
        
    draw();
}       
function showkostentable(){
	var div1 = document.getElementById('kostentable');
        div1.style.visibility = 'visible';
        var div2 = document.getElementById('teilnehmertable1');
        div2.style.visibility = 'hidden';
        var div3 = document.getElementById('teilnehmertable2');
        div3.style.visibility = 'hidden';
        var div4 = document.getElementById('teilnehmertable3');
        div4.style.visibility = 'hidden';
        var div5 = document.getElementById('header_down');
        div5.style.visibility = 'hidden';
}
function showteilnehmertable(){
	var div5 = document.getElementById('header_down');
        div5.style.visibility = 'visible';
	var div1 = document.getElementById('kostentable');
        div1.style.visibility = 'hidden';
	var div2 = document.getElementById('teilnehmertable1');
        div2.style.visibility = 'hidden';
        var div3 = document.getElementById('teilnehmertable2');
        div3.style.visibility = 'hidden';
        var div4 = document.getElementById('teilnehmertable3');
        div4.style.visibility = 'hidden';
}
function showteilnehmertable1(){
        var div1 = document.getElementById('teilnehmertable1');
        div1.style.visibility = 'visible';
        var div2 = document.getElementById('kostentable');
        div2.style.visibility = 'hidden';
	var div3 = document.getElementById('teilnehmertable2');
        div3.style.visibility = 'hidden';
	var div4 = document.getElementById('teilnehmertable3');
        div4.style.visibility = 'hidden';
}
function showteilnehmertable2(){
        var div1 = document.getElementById('teilnehmertable2');
        div1.style.visibility = 'visible';
        var div2 = document.getElementById('kostentable');
        div2.style.visibility = 'hidden';
	var div3 = document.getElementById('teilnehmertable1');
        div3.style.visibility = 'hidden';
	var div4 = document.getElementById('teilnehmertable3');
        div4.style.visibility = 'hidden';
}
function showteilnehmertable3(){
        var div1 = document.getElementById('teilnehmertable3');
        div1.style.visibility = 'visible';
        var div2 = document.getElementById('kostentable');
        div2.style.visibility = 'hidden';
	var div3 = document.getElementById('teilnehmertable1');
        div3.style.visibility = 'hidden';
	var div4 = document.getElementById('teilnehmertable2');
        div4.style.visibility = 'hidden';
}
