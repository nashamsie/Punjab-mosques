var wms_layers = [];


        var lyr_ESRIStandard_0 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Punjabpkpunjab_1 = new ol.format.GeoJSON();
var features_Punjabpkpunjab_1 = format_Punjabpkpunjab_1.readFeatures(json_Punjabpkpunjab_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punjabpkpunjab_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punjabpkpunjab_1.addFeatures(features_Punjabpkpunjab_1);
var lyr_Punjabpkpunjab_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Punjabpkpunjab_1, 
                style: style_Punjabpkpunjab_1,
                popuplayertitle: "Punjab — pkpunjab",
                interactive: false,
                title: '<img src="styles/legend/Punjabpkpunjab_1.png" /> Punjab — pkpunjab'
            });
var format_MosqueInformation_2 = new ol.format.GeoJSON();
var features_MosqueInformation_2 = format_MosqueInformation_2.readFeatures(json_MosqueInformation_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MosqueInformation_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MosqueInformation_2.addFeatures(features_MosqueInformation_2);
var lyr_MosqueInformation_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MosqueInformation_2, 
                style: style_MosqueInformation_2,
                popuplayertitle: "Mosque Information",
                interactive: true,
                title: '<img src="styles/legend/MosqueInformation_2.png" /> Mosque Information'
            });

lyr_ESRIStandard_0.setVisible(true);lyr_Punjabpkpunjab_1.setVisible(true);lyr_MosqueInformation_2.setVisible(true);
var layersList = [lyr_ESRIStandard_0,lyr_Punjabpkpunjab_1,lyr_MosqueInformation_2];
lyr_Punjabpkpunjab_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'source': 'source', 'id': 'id', });
lyr_MosqueInformation_2.set('fieldAliases', {'Zone': 'Zone', 'Mosque ID': 'Mosque ID', 'Mosque Name': 'Mosque Name', 'Phone Numbers Collected': 'Phone Numbers Collected', 'Recruitment total form': 'Recruitment total form', 'Recruitment total form in person': 'Recruitment total form in person', 'Whatsapp Location Number collection': 'Whatsapp Location Number collection', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Surveys Completed': 'Surveys Completed', 'Wife Surveys Consents': 'Wife Surveys Consents', 'Wife Surveys Completed': 'Wife Surveys Completed', 'Phone Number Collection (GPS Location Backcheck) - Done?': 'Phone Number Collection (GPS Location Backcheck) - Done?', 'Men Baseline (GPS Location Backcheck) - Nr Completed': 'Men Baseline (GPS Location Backcheck) - Nr Completed', 'Men Baseline (Only Male Backcheck) - Nr Completed': 'Men Baseline (Only Male Backcheck) - Nr Completed', 'Men Baseline (Couple Backcheck) - Nr Completed': 'Men Baseline (Couple Backcheck) - Nr Completed', 'Notes': 'Notes', });
lyr_Punjabpkpunjab_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'source': 'TextEdit', 'id': 'TextEdit', });
lyr_MosqueInformation_2.set('fieldImages', {'Zone': 'TextEdit', 'Mosque ID': 'TextEdit', 'Mosque Name': 'TextEdit', 'Phone Numbers Collected': 'Range', 'Recruitment total form': 'Range', 'Recruitment total form in person': 'Range', 'Whatsapp Location Number collection': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Surveys Completed': 'Range', 'Wife Surveys Consents': 'Range', 'Wife Surveys Completed': 'Range', 'Phone Number Collection (GPS Location Backcheck) - Done?': 'CheckBox', 'Men Baseline (GPS Location Backcheck) - Nr Completed': 'TextEdit', 'Men Baseline (Only Male Backcheck) - Nr Completed': 'TextEdit', 'Men Baseline (Couple Backcheck) - Nr Completed': 'TextEdit', 'Notes': 'TextEdit', });
lyr_Punjabpkpunjab_1.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'source': 'no label', 'id': 'no label', });
lyr_MosqueInformation_2.set('fieldLabels', {'Zone': 'inline label - visible with data', 'Mosque ID': 'inline label - visible with data', 'Mosque Name': 'inline label - always visible', 'Phone Numbers Collected': 'hidden field', 'Recruitment total form': 'hidden field', 'Recruitment total form in person': 'hidden field', 'Whatsapp Location Number collection': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Surveys Completed': 'inline label - visible with data', 'Wife Surveys Consents': 'hidden field', 'Wife Surveys Completed': 'hidden field', 'Phone Number Collection (GPS Location Backcheck) - Done?': 'hidden field', 'Men Baseline (GPS Location Backcheck) - Nr Completed': 'hidden field', 'Men Baseline (Only Male Backcheck) - Nr Completed': 'hidden field', 'Men Baseline (Couple Backcheck) - Nr Completed': 'hidden field', 'Notes': 'hidden field', });
lyr_MosqueInformation_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});