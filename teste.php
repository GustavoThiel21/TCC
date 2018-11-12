<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>Aplicação TCC</title>
</head>

<body class="theme-red">
<script>
        //var l = ["gmap_markers","gmap_markers2","gmap_markers3","gmap_markers4","gmap_markers5"];
        //var l2 = ["gmap_markers", "gmap_markers", "gmap_markers2","gmap_markers3","gmap_markers4"];
       var l = 1;
       var l2 = 1; 
        var intervalo = setInterval(function(){ocultar('gmap_markers' + l, 'gmap_markers' + l2)}, 1000);
    
        function ocultar(div,div2){
            document.getElementById(div).style.display = 'none';
            document.getElementById(div2).style.display = 'block';
            l = l + 1;
            l2 = l2 + 1;
            if (l2 == 2){
               l=l-1; 
            }
            if (l == 5){
                clearInterval(intervalo);
            } 
        }
        
</script>
    <section class="content">
        <div class="container-fluid">
            <div class="row clearfix">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>Localização</h2>
                    <button type="button" onclick="setInterval">Mostrar</button>
                    <button type="button" onclick="document.getElementById('gmap_markers5').style.display = 'block';">Esconder</button>
                </div>
                <div class="body">
                    <div id="gmap_markers1" style="display:none" class="gmap">teste</div>
                    <div id="gmap_markers2" style="display:none" class="gmap">teste2</div>
                    <div id="gmap_markers3" style="display:none" class="gmap">teste3</div>
                    <div id="gmap_markers4" style="display:none" class="gmap">teste4</div>
                    <div id="gmap_markers5" style="display:none" class="gmap">teste5</div>     
                    <script>
                    //setInterval();
                    //ocultar('gmap_markers1', 'gmap_markers1');
                   // myFunction;
                   // ocultar('gmap_markers1', 'gmap_markers2');
                    //myFunction('gmap_markers2', 'gmap_markers3');
                    //myFunction('gmap_markers3', 'gmap_markers4');
                    //myFunction('gmap_markers4', 'gmap_markers5');
                    </script>   
                </div>                                                
            </div>
            </div>
            </div><!-- #END# Markers -->
            
        </div>
    </section>
</section>
    </body>
    
    </html>
    