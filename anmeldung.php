<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
    <head>
        
    </head>
    <body>
        <?php
            
            if($_GET['messe']=='CeBIT'){
                $my_file='cebit.txt';
            }else if($_GET['messe']=='ConIT'){
                $my_file='conhit.txt';
            }else if($_GET['messe']=='WebTech Con'){
                $my_file='webtech.txt';
            }
            
            $output=$_GET['vorname']." ".$_GET['name'].", ".$_GET['matrikelnr'].", ".$_GET['email'].", ".$_GET['handy'].", ".$_GET['studiengang'].";\n";
           
            $handle = fopen($my_file, 'a') or die('Cannot open file:  '.$my_file);
            fwrite($handle, $output);
            fclose($handle);
            echo $output;
            echo "<br>Eintrag erzeugt.";  
             
             
        ?>
        <br>
        <a href="index.html">zur&uuml;ck</a>
    </body>
</html>