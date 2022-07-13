ol.proj.get("EPSG:4326").setExtent([110.219976, -7.120007, 110.558624, -6.929199]);
var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_petaa_0 = new ol.format.GeoJSON();
var features_petaa_0 = format_petaa_0.readFeatures(json_petaa_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_petaa_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_petaa_0.addFeatures(features_petaa_0);var lyr_petaa_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_petaa_0, 
                style: style_petaa_0,
    title: 'petaa<br />\
    <img src="styles/legend/petaa_0_0.png" />  Sedikit <br />\
    <img src="styles/legend/petaa_0_1.png" />  Banyak <br />\
    <img src="styles/legend/petaa_0_2.png" />  Paling Banyak <br />'
        });

lyr_petaa_0.setVisible(true);
var layersList = [baseLayer,lyr_petaa_0];
lyr_petaa_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'UUPP': 'UUPP', 'Data Kampung Tematik_No.': 'Data Kampung Tematik_No.', 'Data Kampung Tematik_Kecamatan': 'Data Kampung Tematik_Kecamatan', 'Data Kampung Tematik_2016_1': 'Data Kampung Tematik_2016_1', 'Data Kampung Tematik_2017_1': 'Data Kampung Tematik_2017_1', 'Data Kampung Tematik_2018_1': 'Data Kampung Tematik_2018_1', 'Data Kampung Tematik_2019_1': 'Data Kampung Tematik_2019_1', 'Data Kampung Tematik_2020_1': 'Data Kampung Tematik_2020_1', 'Data Kampung Tematik_2021_1': 'Data Kampung Tematik_2021_1', 'Data Kampung Tematik_2022_1': 'Data Kampung Tematik_2022_1', });
lyr_petaa_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'UUPP': 'TextEdit', 'Data Kampung Tematik_No.': 'TextEdit', 'Data Kampung Tematik_Kecamatan': 'TextEdit', 'Data Kampung Tematik_2016_1': 'TextEdit', 'Data Kampung Tematik_2017_1': 'TextEdit', 'Data Kampung Tematik_2018_1': 'TextEdit', 'Data Kampung Tematik_2019_1': 'TextEdit', 'Data Kampung Tematik_2020_1': 'TextEdit', 'Data Kampung Tematik_2021_1': 'TextEdit', 'Data Kampung Tematik_2022_1': 'TextEdit', });
lyr_petaa_0.set('fieldLabels', {'OBJECTID': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'UUPP': 'no label', 'Data Kampung Tematik_No.': 'no label', 'Data Kampung Tematik_Kecamatan': 'no label', 'Data Kampung Tematik_2016_1': 'no label', 'Data Kampung Tematik_2017_1': 'no label', 'Data Kampung Tematik_2018_1': 'no label', 'Data Kampung Tematik_2019_1': 'no label', 'Data Kampung Tematik_2020_1': 'no label', 'Data Kampung Tematik_2021_1': 'no label', 'Data Kampung Tematik_2022_1': 'no label', });
lyr_petaa_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});