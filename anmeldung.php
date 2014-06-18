<html>
    <head>
        
    </head>
    <body>
        <?php
            $output=$_GET['vorname']." ".$_GET['name'].", ".$_GET['matrikelnr'].", ".$_GET['email'].", ".$_GET['handy'].", ".$_GET['studiengang'].";\n";
           $my_file = 'cebit.txt';
            $handle = fopen($my_file, 'a') or die('Cannot open file:  '.$my_file);
            fwrite($handle, $output);
            fclose($handle);
        ?>
    </body>
</html>