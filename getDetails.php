<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
    <head>
        
    </head>
    <body>
        <?php
        
        $jsonfile = file_get_contents('messe.json');
        $jsonarray = json_decode($jsonfile,true);

       //print_r($jsonarray); 
       // var_dump($jsonarray);
 //      print $jsonarray->{'header'};
       // print $jsonarray->{'header'};
        /**
        echo  $jsonarray['header'][0];
        echo  $jsonarray['header'][1];
        echo "<br>";
        echo  $jsonarray['data']['messe'][0];
        echo  $jsonarray['data']['selbstkosten'][0]; 
        echo "<br>";
        echo  $jsonarray['data']['messe'][1];
        echo  $jsonarray['data']['selbstkosten'][1]; 
        echo "<br>";
        echo  $jsonarray['data']['messe'][2];
        echo  $jsonarray['data']['selbstkosten'][2]; 
        echo "<br>";
         
         **/
        //REQUEST KOMMT AN UND DAS JSON FILE MUSS AN DEN CLIENT gesendet werden.
        
        return $jsonarray;
        
        
            /**
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
            **/
             
        ?>
        <br>
        <a href="index.html">zur&uuml;ck</a>
    </body>
</html>