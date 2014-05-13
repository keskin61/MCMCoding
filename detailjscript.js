
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
       function TeilnehmerTable(rows, cols){   

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
        content[1][1]="Günther";
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
          var div2 = document.getElementById('teilnehmertable');
          div2.style.visibility = 'hidden';
       }       
       function showteilnehmertable(){
          var div1 = document.getElementById('teilnehmertable');
          div1.style.visibility = 'visible';
          var div2 = document.getElementById('kostentable');
          div2.style.visibility = 'hidden';
       }
       



