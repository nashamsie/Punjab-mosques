var wms_layers = [];


        var lyr_WazeWorld_0 = new ol.layer.Tile({
            'title': 'Waze (World)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });

        var lyr_Positron_1 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Punjab_2 = new ol.format.GeoJSON();
var features_Punjab_2 = format_Punjab_2.readFeatures(json_Punjab_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punjab_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punjab_2.addFeatures(features_Punjab_2);
var lyr_Punjab_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Punjab_2, 
                style: style_Punjab_2,
                popuplayertitle: 'Punjab',
                interactive: false,
                title: '<img src="styles/legend/Punjab_2.png" /> Punjab'
            });
var format_MosqueInformation_3 = new ol.format.GeoJSON();
var features_MosqueInformation_3 = format_MosqueInformation_3.readFeatures(json_MosqueInformation_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MosqueInformation_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MosqueInformation_3.addFeatures(features_MosqueInformation_3);
var lyr_MosqueInformation_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MosqueInformation_3, 
                style: style_MosqueInformation_3,
                popuplayertitle: 'Mosque Information',
                interactive: true,
    title: 'Mosque Information<br />\
    <img src="styles/legend/MosqueInformation_3_0.png" /> DG Khan <br />\
    <img src="styles/legend/MosqueInformation_3_1.png" /> Faisalabad<br />\
    <img src="styles/legend/MosqueInformation_3_2.png" /> Lahore<br />\
    <img src="styles/legend/MosqueInformation_3_3.png" /> Shahkot<br />\
    <img src="styles/legend/MosqueInformation_3_4.png" /> Shiekhupura<br />'
        });

lyr_WazeWorld_0.setVisible(true);lyr_Positron_1.setVisible(true);lyr_Punjab_2.setVisible(true);lyr_MosqueInformation_3.setVisible(true);
var layersList = [lyr_WazeWorld_0,lyr_Positron_1,lyr_Punjab_2,lyr_MosqueInformation_3];
lyr_Punjab_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'source': 'source', 'id': 'id', });
lyr_MosqueInformation_3.set('fieldAliases', {'fid': 'fid', 'Zone': 'Zone', 'Mosque ID': 'Mosque ID', 'Mosque Name': 'Mosque Name', 'Phone Numbers Collected': 'Phone Numbers Collected', 'Recruitment total form': 'Recruitment total form', 'Recruitment total form in person': 'Recruitment total form in person', 'Whatsapp Location Number collection': 'Whatsapp Location Number collection', 'Surveys Completed': 'Surveys Completed', 'Wife Surveys Consents': 'Wife Surveys Consents', 'Wife Surveys Completed': 'Wife Surveys Completed', 'Phone Number Collection (GPS Location Backcheck) - Done?': 'Phone Number Collection (GPS Location Backcheck) - Done?', 'Men Baseline (GPS Location Backcheck) - Nr Completed': 'Men Baseline (GPS Location Backcheck) - Nr Completed', 'Men Baseline (Only Male Backcheck) - Nr Completed': 'Men Baseline (Only Male Backcheck) - Nr Completed', 'Men Baseline (Couple Backcheck) - Nr Completed': 'Men Baseline (Couple Backcheck) - Nr Completed', 'Notes': 'Notes', 'image_path': 'image_path', });
lyr_Punjab_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'source': 'TextEdit', 'id': 'TextEdit', });
lyr_MosqueInformation_3.set('fieldImages', {'fid': 'TextEdit', 'Zone': 'TextEdit', 'Mosque ID': 'TextEdit', 'Mosque Name': 'TextEdit', 'Phone Numbers Collected': 'TextEdit', 'Recruitment total form': 'TextEdit', 'Recruitment total form in person': 'TextEdit', 'Whatsapp Location Number collection': 'TextEdit', 'Surveys Completed': 'TextEdit', 'Wife Surveys Consents': 'TextEdit', 'Wife Surveys Completed': 'TextEdit', 'Phone Number Collection (GPS Location Backcheck) - Done?': 'TextEdit', 'Men Baseline (GPS Location Backcheck) - Nr Completed': 'TextEdit', 'Men Baseline (Only Male Backcheck) - Nr Completed': 'TextEdit', 'Men Baseline (Couple Backcheck) - Nr Completed': 'TextEdit', 'Notes': 'TextEdit', 'image_path': 'TextEdit', });
lyr_Punjab_2.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'source': 'no label', 'id': 'no label', });
lyr_MosqueInformation_3.set('fieldLabels', {'fid': 'hidden field', 'Zone': 'inline label - always visible', 'Mosque ID': 'inline label - always visible', 'Mosque Name': 'inline label - always visible', 'Phone Numbers Collected': 'hidden field', 'Recruitment total form': 'hidden field', 'Recruitment total form in person': 'hidden field', 'Whatsapp Location Number collection': 'hidden field', 'Surveys Completed': 'hidden field', 'Wife Surveys Consents': 'hidden field', 'Wife Surveys Completed': 'hidden field', 'Phone Number Collection (GPS Location Backcheck) - Done?': 'hidden field', 'Men Baseline (GPS Location Backcheck) - Nr Completed': 'hidden field', 'Men Baseline (Only Male Backcheck) - Nr Completed': 'hidden field', 'Men Baseline (Couple Backcheck) - Nr Completed': 'hidden field', 'Notes': 'hidden field', 'image_path': 'no label', });
lyr_MosqueInformation_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});