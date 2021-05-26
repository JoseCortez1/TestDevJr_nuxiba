CREATE database  Prueba2;

CREATE TABLE costos (
      costo decimal(10,4),
      tipoDeLlamada varchar(15)
    
);
INSERT INTO costos (
tipoDeLlamada, costo
)
VALUES
('Cel',	0.4),
('LD nacional',	0.12),
('Cel LD',	0.5);

CREATE TABLE logDial (
      idLlamada varchar(10),
      fechaDeLlamada datetime ,
      tiempoDialogo smallint,
      telefono varchar(10),
      tipoDeLlamada varchar(15)    
);


INSERT INTO logDial (
      idLlamada, 
      fechaDeLlamada , 
      tiempoDialogo , 
      telefono ,      
      tipoDeLlamada
)
VALUES('197463',	'20200101',	60,	'8000000001',	'Cel LD'),
('197464',	'20200102',	60,	'8000000002',	'Cel LD'),
('197465',	'20200103',	240,	'8000000003',	'Cel LD'),
('197466',	'20200104',	60,	'8000000004',	'Cel LD'),
('197467',	'20200105',	60,	'8000000005',	'Cel LD'),
('197468',	'20200106',	60,	'8000000006',	'Cel LD'),
('197469',	'20200107',	60,	'8000000007',	'Cel'),
('197470',	'20200108',	120,	'8000000008',	'LD nacional'),
('197471',	'20200109',	60,	'8000000009',	'Cel LD'),
('197472',	'20200110',	60,	'8000000010',	'Cel LD'),
('197473',	'20200111',	120,	'8000000011',	'Cel LD'),
('197474',	'20200112',	60,	'8000000012',	'LD nacional'),
('197475',	'20200113',	60,	'8000000013',	'LD nacional'),
('197476',	'20200114',	60,	'8000000014',	'Cel'),
('197477',	'20200115',	120,	'8000000015',	'Cel LD'),
('197478',	'20200116',	60,	'8000000016',	'Cel LD'),
('197479',	'20200117',	60,	'8000000017',	'Cel'),
('197480',	'20200118',	60,	'8000000018',	'Cel LD'),
('197481',	'20200119',	180,	'8000000019',	'LD nacional'),
('197482',	'20200120',	120,	'8000000020',	'LD nacional'),
('197483',	'20200121',	60,	'8000000021',	'Cel LD'),
('197484',	'20200122',	60,	'8000000022',	'Cel LD'),
('197485',	'20200123',	60,	'8000000023',	'Cel LD'),
('197486',	'20200124',	120,	'8000000024',	'Cel LD'),
('197487',	'20200125',	60,	'8000000025',	'Cel LD'),
('197488',	'20200126',	60,	'8000000026',	'Cel LD'),
('197489',	'20200127',	120,	'8000000027',	'Cel LD'),
('197490',	'20200128',	60,	'8000000028',	'Cel LD'),
('197491',	'20200129',	76,	'8000000029',	'Cel LD'),
('197492',	'20200130',	60,	'8000000030',	'Cel LD'),
('197493',	'20200131',	60,	'8000000031',	'Cel'),
('197494',	'20200201',	60,	'8000000032',	'Cel'),
('197495',	'20200202',	60,	'8000000033',	'Cel'),
('197496',	'20200203',	240,	'8000000034',	'Cel LD'),
('197497',	'20200204',	60,	'8000000035',	'Cel LD'),
('197498',	'20200205',	240,	'8000000036',	'Cel LD'),
('197499',	'20200206',	120,	'8000000037',	'Cel LD'),
('197500',	'20200207',	95,	'8000000038',	'Cel LD'),
('197501',	'20200208',	60,	'8000000039',	'Cel LD'),
('197502',	'20200209',	60,	'8000000040',	'Cel LD'),
('197503',	'20200210',	360,	'8000000041',	'Cel LD'),
('197504',	'20200211',	60,	'8000000042',	'Cel'),
('197505',	'20200212',	60,	'8000000043',	'Cel LD'),
('197506',	'20200213',	60,	'8000000044',	'Cel LD'),
('197507',	'20200214',	120,	'8000000045',	'Cel LD'),
('197508',	'20200215',	60,	'8000000046',	'Cel LD'),
('197509',	'20200216',	60,	'8000000047',	'Cel LD'),
('197510',	'20200217',	120,	'8000000048',	'Cel LD'),
('197511',	'20200218',	120,	'8000000049',	'Cel LD'),
('197512',	'20200219',	60,	'8000000050',	'Cel LD'),
('197513',	'20200220',	85,	'8000000051',	'Cel LD'),
('197514',	'20200221',	60,	'8000000052',	'Cel'),
('197515',	'20200222',	60,	'8000000053',	'Cel'),
('197516',	'20200223',	120,	'8000000054',	'Cel LD'),
('197517',	'20200224',	120,	'8000000055',	'Cel LD'),
('197518',	'20200225',	240,	'8000000056',	'Cel LD'),
('197519',	'20200226',	60,	'8000000057',	'Cel LD'),
('197520',	'20200227',	180,	'8000000058',	'Cel LD'),
('197521',	'20200228',	180,	'8000000059',	'Cel LD'),
('197522',	'20200229',	120,	'8000000060',	'Cel'),
('197523',	'20200301',	60,	'8000000061',	'Cel'),
('197524',	'20200302',	60,	'8000000062',	'Cel LD'),
('197525',	'20200303',	120,	'8000000063',	'Cel LD'),
('197526',	'20200304',	60,	'8000000064',	'Cel LD'),
('197527',	'20200305',	60,	'8000000065',	'Cel'),
('197528',	'20200306',	60,	'8000000066',	'Cel LD'),
('197529',	'20200307',	60,	'8000000067',	'Cel'),
('197530',	'20200308',	60,	'8000000068',	'Cel LD'),
('197531',	'20200309',	60,	'8000000069',	'Cel LD'),
('197532',	'20200310',	60,	'8000000070',	'Cel LD'),
('197533',	'20200311',	60,	'8000000071',	'Cel LD'),
('197534',	'20200312',	120,	'8000000072',	'Cel LD'),
('197535',	'20200313',	60,	'8000000073',	'Cel LD'),
('197536',	'20200314',	60,	'8000000074',	'Cel'),
('197537',	'20200315',	60,	'8000000075',	'Cel LD'),
('197538',	'20200316',	120,	'8000000076',	'Cel LD'),
('197539',	'20200317',	60,	'8000000077',	'Cel'),
('197540',	'20200318',	60,	'8000000078',	'Cel LD'),
('197541',	'20200319',	86,	'8000000079',	'Cel LD'),
('197542',	'20200320',	120,	'8000000080',	'Cel'),
('197543',	'20200321',	120,	'8000000081',	'Cel LD'),
('197544',	'20200322',	60,	'8000000082',	'Cel LD'),
('197545',	'20200323',	77,	'8000000083',	'Cel LD'),
('197546',	'20200324',	60,	'8000000084',	'Cel'),
('197547',	'20200325',	60,	'8000000085',	'Cel LD'),
('197548',	'20200326',	120,	'8000000086',	'Cel LD'),
('197549',	'20200327',	180,	'8000000087',	'Cel LD'),
('197550',	'20200328',	180,	'8000000088',	'Cel LD'),
('197551',	'20200329',	60,	'8000000089',	'Local'),
('197552',	'20200330',	60,	'8000000090',	'LD nacional'),
('197553',	'20200331',	60,	'8000000091',	'Cel LD'),
('197554',	'20200401',	60,	'8000000092',	'Cel LD'),
('197555',	'20200402',	60,	'8000000093',	'Cel LD'),
('197556',	'20200403',	180,	'8000000094',	'Cel'),
('197557',	'20200404',	60,	'8000000095',	'Cel LD'),
('197558',	'20200405',	196,	'8000000096',	'Cel'),
('197559',	'20200406',	60,	'8000000097',	'Cel LD'),
('197560',	'20200407',	60,	'8000000098',	'Cel'),
('197561',	'20200408',	60,	'8000000099',	'Cel LD'),
('197562',	'20200409',	60,	'8000000100',	'Cel'),
('197563',	'20200410',	60,	'8000000101',	'Cel'),
('197564',	'20200411',	60,	'8000000102',	'Cel LD'),
('197565',	'20200412',	60,	'8000000103',	'Cel'),
('197566',	'20200413',	120,	'8000000104',	'Cel LD'),
('197567',	'20200414',	180,	'8000000105',	'Cel'),
('197568',	'20200415',	60,	'8000000106',	'Cel LD'),
('197569',	'20200416',	60,	'8000000107',	'Cel LD'),
('197570',	'20200417',	60,	'8000000108',	'Cel LD'),
('197571',	'20200418',	180,	'8000000109',	'Cel LD'),
('197572',	'20200419',	60,	'8000000110',	'Cel LD'),
('197573',	'20200420',	60,	'8000000111',	'LD nacional'),
('197574',	'20200421',	60,	'8000000112',	'Cel LD'),
('197575',	'20200422',	60,	'8000000113',	'Cel LD'),
('197576',	'20200423',	60,	'8000000114',	'Cel LD'),
('197577',	'20200424',	60,	'8000000115',	'Cel'),
('197578',	'20200425',	60,	'8000000116',	'Cel LD'),
('197579',	'20200426',	60,	'8000000117',	'Cel LD'),
('197580',	'20200427',	240,	'8000000118',	'Cel LD'),
('197581',	'20200428',	60,	'8000000119',	'Cel LD'),
('197582',	'20200429',	60,	'8000000120',	'Cel LD'),
('197583',	'20200430',	120,	'8000000121',	'Cel LD'),
('197584',	'20200501',	60,	'8000000122',	'Cel LD'),
('197585',	'20200502',	60,	'8000000123',	'Cel LD'),
('197586',	'20200503',	120,	'8000000124',	'LD nacional'),
('197587',	'20200504',	60,	'8000000125',	'Cel LD'),
('197588',	'20200505',	60,	'8000000126',	'LD nacional'),
('197589',	'20200506',	60,	'8000000127',	'Cel'),
('197590',	'20200507',	60,	'8000000128',	'Cel LD'),
('197591',	'20200508',	120,	'8000000129',	'Cel LD');


 