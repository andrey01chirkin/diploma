--
-- PostgreSQL database dump
--

-- Dumped from database version 13.0
-- Dumped by pg_dump version 13.0

-- Started on 2022-05-22 09:02:09

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 6 (class 2615 OID 76691)
-- Name: sptd; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA sptd;


ALTER SCHEMA sptd OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 201 (class 1259 OID 76692)
-- Name: adaptation; Type: TABLE; Schema: sptd; Owner: postgres
--

CREATE TABLE sptd.adaptation (
    adaptation_id character varying(50) NOT NULL,
    "nameAdaptation" character varying(50) NOT NULL
);


ALTER TABLE sptd.adaptation OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 76695)
-- Name: adaptation_adaptation_id_seq; Type: SEQUENCE; Schema: sptd; Owner: postgres
--

CREATE SEQUENCE sptd.adaptation_adaptation_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE sptd.adaptation_adaptation_id_seq OWNER TO postgres;

--
-- TOC entry 3160 (class 0 OID 0)
-- Dependencies: 202
-- Name: adaptation_adaptation_id_seq; Type: SEQUENCE OWNED BY; Schema: sptd; Owner: postgres
--

ALTER SEQUENCE sptd.adaptation_adaptation_id_seq OWNED BY sptd.adaptation.adaptation_id;


--
-- TOC entry 203 (class 1259 OID 76697)
-- Name: equipment; Type: TABLE; Schema: sptd; Owner: postgres
--

CREATE TABLE sptd.equipment (
    equipment_id character varying(50) NOT NULL,
    "nameEquipment" character varying(50) NOT NULL
);


ALTER TABLE sptd.equipment OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 76700)
-- Name: equipment_equipment_id_seq; Type: SEQUENCE; Schema: sptd; Owner: postgres
--

CREATE SEQUENCE sptd.equipment_equipment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE sptd.equipment_equipment_id_seq OWNER TO postgres;

--
-- TOC entry 3161 (class 0 OID 0)
-- Dependencies: 204
-- Name: equipment_equipment_id_seq; Type: SEQUENCE OWNED BY; Schema: sptd; Owner: postgres
--

ALTER SEQUENCE sptd.equipment_equipment_id_seq OWNED BY sptd.equipment.equipment_id;


--
-- TOC entry 205 (class 1259 OID 76702)
-- Name: executor; Type: TABLE; Schema: sptd; Owner: postgres
--

CREATE TABLE sptd.executor (
    executor_id character varying(50) NOT NULL,
    "nameExecutor" integer NOT NULL,
    tsht integer NOT NULL,
    tpz integer NOT NULL,
    test integer NOT NULL,
    "tshtCalculated" integer,
    "tpzCalculated" integer,
    "testCalculated" integer,
    kvr integer NOT NULL,
    trans_id character varying(50) NOT NULL
);


ALTER TABLE sptd.executor OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 76705)
-- Name: executor_executor_id_seq; Type: SEQUENCE; Schema: sptd; Owner: postgres
--

CREATE SEQUENCE sptd.executor_executor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE sptd.executor_executor_id_seq OWNER TO postgres;

--
-- TOC entry 3162 (class 0 OID 0)
-- Dependencies: 206
-- Name: executor_executor_id_seq; Type: SEQUENCE OWNED BY; Schema: sptd; Owner: postgres
--

ALTER SEQUENCE sptd.executor_executor_id_seq OWNED BY sptd.executor.executor_id;


--
-- TOC entry 207 (class 1259 OID 76707)
-- Name: executor_trans_id_seq; Type: SEQUENCE; Schema: sptd; Owner: postgres
--

CREATE SEQUENCE sptd.executor_trans_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE sptd.executor_trans_id_seq OWNER TO postgres;

--
-- TOC entry 3163 (class 0 OID 0)
-- Dependencies: 207
-- Name: executor_trans_id_seq; Type: SEQUENCE OWNED BY; Schema: sptd; Owner: postgres
--

ALTER SEQUENCE sptd.executor_trans_id_seq OWNED BY sptd.executor.trans_id;


--
-- TOC entry 208 (class 1259 OID 76709)
-- Name: fusion; Type: TABLE; Schema: sptd; Owner: postgres
--

CREATE TABLE sptd.fusion (
    fusion_id character varying(50) NOT NULL,
    "nameFusion" character varying(50) NOT NULL
);


ALTER TABLE sptd.fusion OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 76760)
-- Name: initial_form; Type: TABLE; Schema: sptd; Owner: postgres
--

CREATE TABLE sptd.initial_form (
    form_id character varying(50) NOT NULL,
    "nameForm" character varying(50) NOT NULL
);


ALTER TABLE sptd.initial_form OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 76712)
-- Name: kind_metals; Type: TABLE; Schema: sptd; Owner: postgres
--

CREATE TABLE sptd.kind_metals (
    metal_id character varying(50) NOT NULL,
    "nameMetal" character varying(50) NOT NULL,
    fusion_id character varying(50) NOT NULL
);


ALTER TABLE sptd.kind_metals OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 76715)
-- Name: mark_metals; Type: TABLE; Schema: sptd; Owner: postgres
--

CREATE TABLE sptd.mark_metals (
    mark_id character varying(50) NOT NULL,
    "nameMark" character varying(50) NOT NULL,
    metal_id character varying(50) NOT NULL
);


ALTER TABLE sptd.mark_metals OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 76718)
-- Name: number_adaptation; Type: TABLE; Schema: sptd; Owner: postgres
--

CREATE TABLE sptd.number_adaptation (
    number_id character varying(50) NOT NULL,
    "inventoryNumber" integer NOT NULL,
    "codeAdaptation" integer NOT NULL,
    adaptation_id character varying(50) NOT NULL
);


ALTER TABLE sptd.number_adaptation OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 76721)
-- Name: number_equipment; Type: TABLE; Schema: sptd; Owner: postgres
--

CREATE TABLE sptd.number_equipment (
    number_id character varying(50) NOT NULL,
    "inventoryNumber" integer NOT NULL,
    "codeEquipment" integer NOT NULL,
    equipment_id character varying(50) NOT NULL
);


ALTER TABLE sptd.number_equipment OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 76724)
-- Name: number_tool; Type: TABLE; Schema: sptd; Owner: postgres
--

CREATE TABLE sptd.number_tool (
    number_id character varying(50) NOT NULL,
    "inventoryNumber" integer NOT NULL,
    "codeTool" integer NOT NULL,
    tool_id character varying(50) NOT NULL
);


ALTER TABLE sptd.number_tool OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 76727)
-- Name: oper; Type: TABLE; Schema: sptd; Owner: postgres
--

CREATE TABLE sptd.oper (
    oper_id character varying(50) NOT NULL,
    "nameOperation" character varying(50) NOT NULL,
    "numberOperation" character varying(3) NOT NULL,
    workshop integer NOT NULL,
    area integer NOT NULL,
    "OO" boolean NOT NULL,
    "OTK" boolean NOT NULL,
    "PZ" boolean NOT NULL,
    "KPS" boolean NOT NULL,
    tech_id character varying(50) NOT NULL
);


ALTER TABLE sptd.oper OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 76730)
-- Name: oper_adaptation; Type: TABLE; Schema: sptd; Owner: postgres
--

CREATE TABLE sptd.oper_adaptation (
    oper_id character varying(50) NOT NULL,
    adaptation_id character varying(50) NOT NULL,
    number_id character varying(50) NOT NULL
);


ALTER TABLE sptd.oper_adaptation OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 76733)
-- Name: oper_equipment; Type: TABLE; Schema: sptd; Owner: postgres
--

CREATE TABLE sptd.oper_equipment (
    oper_id character varying(50) NOT NULL,
    equipment_id character varying(50) NOT NULL,
    number_id character varying(50) NOT NULL
);


ALTER TABLE sptd.oper_equipment OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 76736)
-- Name: oper_oper_id_seq; Type: SEQUENCE; Schema: sptd; Owner: postgres
--

CREATE SEQUENCE sptd.oper_oper_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE sptd.oper_oper_id_seq OWNER TO postgres;

--
-- TOC entry 3164 (class 0 OID 0)
-- Dependencies: 217
-- Name: oper_oper_id_seq; Type: SEQUENCE OWNED BY; Schema: sptd; Owner: postgres
--

ALTER SEQUENCE sptd.oper_oper_id_seq OWNED BY sptd.oper.oper_id;


--
-- TOC entry 218 (class 1259 OID 76738)
-- Name: oper_tool; Type: TABLE; Schema: sptd; Owner: postgres
--

CREATE TABLE sptd.oper_tool (
    oper_id character varying(50) NOT NULL,
    tool_id character varying(50) NOT NULL,
    number_id character varying(50) NOT NULL
);


ALTER TABLE sptd.oper_tool OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 76741)
-- Name: tech_tech_id_seq; Type: SEQUENCE; Schema: sptd; Owner: postgres
--

CREATE SEQUENCE sptd.tech_tech_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE sptd.tech_tech_id_seq OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 76743)
-- Name: tech; Type: TABLE; Schema: sptd; Owner: postgres
--

CREATE TABLE sptd.tech (
    tech_id character varying(50) DEFAULT nextval('sptd.tech_tech_id_seq'::regclass) NOT NULL,
    "techName" character varying(50) NOT NULL,
    "techMark" integer NOT NULL,
    "techWorkshop" integer NOT NULL
);


ALTER TABLE sptd.tech OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 76747)
-- Name: tech_fusion; Type: TABLE; Schema: sptd; Owner: postgres
--

CREATE TABLE sptd.tech_fusion (
    tech_id character varying(50) NOT NULL,
    fusion_id character varying(50) NOT NULL,
    metal_id character varying(50) NOT NULL,
    mark_id character varying(50) NOT NULL,
    form_id character varying(50) NOT NULL
);


ALTER TABLE sptd.tech_fusion OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 76750)
-- Name: tool; Type: TABLE; Schema: sptd; Owner: postgres
--

CREATE TABLE sptd.tool (
    tool_id character varying(50) NOT NULL,
    "nameTool" character varying(50) NOT NULL
);


ALTER TABLE sptd.tool OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 76753)
-- Name: tool_tool_id_seq; Type: SEQUENCE; Schema: sptd; Owner: postgres
--

CREATE SEQUENCE sptd.tool_tool_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE sptd.tool_tool_id_seq OWNER TO postgres;

--
-- TOC entry 3165 (class 0 OID 0)
-- Dependencies: 223
-- Name: tool_tool_id_seq; Type: SEQUENCE OWNED BY; Schema: sptd; Owner: postgres
--

ALTER SEQUENCE sptd.tool_tool_id_seq OWNED BY sptd.tool.tool_id;


--
-- TOC entry 224 (class 1259 OID 76755)
-- Name: transition; Type: TABLE; Schema: sptd; Owner: postgres
--

CREATE TABLE sptd.transition (
    trans_id character varying(50) NOT NULL,
    "nameTransition" character varying(50) NOT NULL,
    oper_id character varying(50) NOT NULL
);


ALTER TABLE sptd.transition OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 76758)
-- Name: transition_trans_id_seq; Type: SEQUENCE; Schema: sptd; Owner: postgres
--

CREATE SEQUENCE sptd.transition_trans_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE sptd.transition_trans_id_seq OWNER TO postgres;

--
-- TOC entry 3166 (class 0 OID 0)
-- Dependencies: 225
-- Name: transition_trans_id_seq; Type: SEQUENCE OWNED BY; Schema: sptd; Owner: postgres
--

ALTER SEQUENCE sptd.transition_trans_id_seq OWNED BY sptd.transition.trans_id;


--
-- TOC entry 2933 (class 2604 OID 76763)
-- Name: adaptation adaptation_id; Type: DEFAULT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.adaptation ALTER COLUMN adaptation_id SET DEFAULT nextval('sptd.adaptation_adaptation_id_seq'::regclass);


--
-- TOC entry 2934 (class 2604 OID 76764)
-- Name: equipment equipment_id; Type: DEFAULT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.equipment ALTER COLUMN equipment_id SET DEFAULT nextval('sptd.equipment_equipment_id_seq'::regclass);


--
-- TOC entry 2935 (class 2604 OID 76765)
-- Name: executor executor_id; Type: DEFAULT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.executor ALTER COLUMN executor_id SET DEFAULT nextval('sptd.executor_executor_id_seq'::regclass);


--
-- TOC entry 2936 (class 2604 OID 76766)
-- Name: executor trans_id; Type: DEFAULT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.executor ALTER COLUMN trans_id SET DEFAULT nextval('sptd.executor_trans_id_seq'::regclass);


--
-- TOC entry 2937 (class 2604 OID 76767)
-- Name: oper oper_id; Type: DEFAULT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.oper ALTER COLUMN oper_id SET DEFAULT nextval('sptd.oper_oper_id_seq'::regclass);


--
-- TOC entry 2939 (class 2604 OID 76768)
-- Name: tool tool_id; Type: DEFAULT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.tool ALTER COLUMN tool_id SET DEFAULT nextval('sptd.tool_tool_id_seq'::regclass);


--
-- TOC entry 2940 (class 2604 OID 76769)
-- Name: transition trans_id; Type: DEFAULT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.transition ALTER COLUMN trans_id SET DEFAULT nextval('sptd.transition_trans_id_seq'::regclass);


--
-- TOC entry 3129 (class 0 OID 76692)
-- Dependencies: 201
-- Data for Name: adaptation; Type: TABLE DATA; Schema: sptd; Owner: postgres
--

COPY sptd.adaptation (adaptation_id, "nameAdaptation") FROM stdin;
_zBlX5F2QpstZJLCDUISe	Зажим
5KCXhGs9-YBBrSKGKNvk4	Трехкулачковый патрон
fgs_uyoasilcv65sa4_ew	Хон
opuupMXCs	Тиски
WXgCtrMA_XY-eEb7wtYsO	Центр
tSTD44CiOI6HfsQh2rMKj	Оправка
BNVmsuyuuia_sa6a	Люнет
\.


--
-- TOC entry 3131 (class 0 OID 76697)
-- Dependencies: 203
-- Data for Name: equipment; Type: TABLE DATA; Schema: sptd; Owner: postgres
--

COPY sptd.equipment (equipment_id, "nameEquipment") FROM stdin;
kfDGfspjdsfsd54dsf	Токарный станок
dsfgsDFSssd5ds	Фрезерный станок
BDaTIyoiKLJl	Обрабатывающий центр
BNdsfhjkslKF	Сверлильный станок
PIOOPDeRTERUyiuoio	Зуборезный станок
VBCNMVMNMewi	Протяжной станок
UYid54LKPouid	Строгальный станок
OPpoITUBvm564Dfp	Хонинговальный станок
OPiUYUpocxv	Координатно-расточной станок
\.


--
-- TOC entry 3133 (class 0 OID 76702)
-- Dependencies: 205
-- Data for Name: executor; Type: TABLE DATA; Schema: sptd; Owner: postgres
--

COPY sptd.executor (executor_id, "nameExecutor", tsht, tpz, test, "tshtCalculated", "tpzCalculated", "testCalculated", kvr, trans_id) FROM stdin;
18	9784	24	10	7	24	10	7	4974	10
14	1254	19	11	10	19	11	10	2466	6
pB39apT9GWyRPVwzynlrh	7777	100	77	77	100	77	77	10	CBUzxS7gwuL0gb3uhBnzO
plrlT4vPHfT-OFAb7DVrc	7777	34	17	8	34	17	8	1654	52
109Tg_2xIttUH3tD25WLQ	1597	12	10	5	12	10	5	77	ox5ook65V2CPvoD6dNKQi
t1rTVZz-rT9W-rI9qw6Go	6484	55	21	54	0	0	0	5644	365TZDCJxd07zxl1ZHBWm
tZjsOyP8EPyIuU8l-iwhL	1597	8	10	24	0	0	0	7	oiwPwUwGGWAhaVA2QsM81
goCsMtWZ4ooNjNq3N-pwz	2365	17	36	20	17	36	20	4564	tPDLFuss7tuh7K7SEAQ1o
sagEAPH9Mkp5is1yLdUP8	5555	5	17	13	5	17	13	6495	TlM5gM_VqNvdCulUXspQ2
xew3OWYK4IFhcAPTenctD	7777	6	15	14	6	15	14	1247	oMTHY-C6TX9XLwWq9eD03
B08pnC1MPu3L1b8m_O0kb	1597	8	15	13	8	15	13	1254	no3ejrCf0KYcBLZSgBWEj
hZ8LRXsFQ21QRwEysSeCP	7777	9	15	9	9	15	9	5497	C3HZpLvfrZykeySvWKop3
\.


--
-- TOC entry 3136 (class 0 OID 76709)
-- Dependencies: 208
-- Data for Name: fusion; Type: TABLE DATA; Schema: sptd; Owner: postgres
--

COPY sptd.fusion (fusion_id, "nameFusion") FROM stdin;
CIGSxczdf8	Сплавы на основе меди
Ndpskfcvx887ds	Сплавы на основе алюминия
poDLSF84dD	Сплавы на основе вольфрама
xzzcdsfszDS	Сплавы на основе железа
\.


--
-- TOC entry 3154 (class 0 OID 76760)
-- Dependencies: 226
-- Data for Name: initial_form; Type: TABLE DATA; Schema: sptd; Owner: postgres
--

COPY sptd.initial_form (form_id, "nameForm") FROM stdin;
sdfgssd6f54c	Прокат
jsdfxcvds	Поковка
sdfsodLDfsvc	Штамповка
opsiopDJFGdsjfs	Отливка
xcKKJDfsl54sdf	Обработка давлением
\.


--
-- TOC entry 3137 (class 0 OID 76712)
-- Dependencies: 209
-- Data for Name: kind_metals; Type: TABLE DATA; Schema: sptd; Owner: postgres
--

COPY sptd.kind_metals (metal_id, "nameMetal", fusion_id) FROM stdin;
uSDDjdfsf65Dfsdd	Конструкционные стали	xzzcdsfszDS
asdKsa7s5a	Углеродистые стали	xzzcdsfszDS
wqeqpdFDfk54d	Магний	Ndpskfcvx887ds
qweDcxvfsSfdfs4sdf	Медь	Ndpskfcvx887ds
ddFersdf98dsf	Чугун	xzzcdsfszDS
jsaJSdacsdf5scv	Латунь	CIGSxczdf8
rtfgsDfds878s	Бронза	CIGSxczdf8
bcdfJdfvxc	Марганец	Ndpskfcvx887ds
fghsdKdfs74dsf	Инструментальные стали	poDLSF84dD
\.


--
-- TOC entry 3138 (class 0 OID 76715)
-- Dependencies: 210
-- Data for Name: mark_metals; Type: TABLE DATA; Schema: sptd; Owner: postgres
--

COPY sptd.mark_metals (mark_id, "nameMark", metal_id) FROM stdin;
disfJHKdsf	Ст0	uSDDjdfsf65Dfsdd
spxsdfDdfd	Ст1	uSDDjdfsf65Dfsdd
xcvmdsHJlds	Ст2	uSDDjdfsf65Dfsdd
sdfJDfs	Ст3	uSDDjdfsf65Dfsdd
pHJdfljdfs	Ст4	uSDDjdfsf65Dfsdd
dvxcvJDofks	Ст5	uSDDjdfsf65Dfsdd
cvbsfsDfs8df	У7	asdKsa7s5a
poewfvKDfs	У7А	asdKsa7s5a
zxcvbnm	У8	asdKsa7s5a
opewrtgs	У8А	asdKsa7s5a
vxckvIKLfdf	У10	asdKsa7s5a
wesdfgsdk	У11	asdKsa7s5a
xcvxpsdfsbxs	У12	asdKsa7s5a
sdsdfjcx56sdf	У12А	asdKsa7s5a
vcxdflkcvxc234sdf	У13	asdKsa7s5a
sdfcbjlzszfdf	У13А	asdKsa7s5a
xcvlajasfd	КЧ30-6	ddFersdf98dsf
dkmldsfsv	КЧ50-5	ddFersdf98dsf
sdtoipsxg	КЧ80-1.5	ddFersdf98dsf
nbcvsefsd	КЧ33-8	ddFersdf98dsf
oiofgjlxc	\tКЧ55-4	ddFersdf98dsf
spodisop	ЛЦ14К3С3	jsaJSdacsdf5scv
dfgissdfsd	ЛЦ37Мц2С2К	jsaJSdacsdf5scv
jcxvklsdf	ЛЦ40Мц3Ж	jsaJSdacsdf5scv
asdkhxcolvx8dsfs	ЛЦ16К4	jsaJSdacsdf5scv
osdpfojxvasjdsf	ЛЦ40С	jsaJSdacsdf5scv
xcvljdposudf	БрО10	rtfgsDfds878s
Vdsfsdfsgdfsdg	БрО19	rtfgsDfds878s
sdopfupiofg	БрО4Ц4С17	rtfgsDfds878s
xcvxssdfkghlk	БрО6Ц6С3	rtfgsDfds878s
xbxjfshdfsdkfls	БрОС10-10	rtfgsDfds878s
\.


--
-- TOC entry 3139 (class 0 OID 76718)
-- Dependencies: 211
-- Data for Name: number_adaptation; Type: TABLE DATA; Schema: sptd; Owner: postgres
--

COPY sptd.number_adaptation (number_id, "inventoryNumber", "codeAdaptation", adaptation_id) FROM stdin;
VDIFKJGAlfssd5sa	5645	7845	WXgCtrMA_XY-eEb7wtYsO
BJKDGOfis_54a5NCM	5645	7845	WXgCtrMA_XY-eEb7wtYsO
YITUyoilsdl5as	7365	3789	_zBlX5F2QpstZJLCDUISe
VCVHKGHLIyidsf	1564	2354	_zBlX5F2QpstZJLCDUISe
Iousdfosd	4315	3455	5KCXhGs9-YBBrSKGKNvk4
Lklsdfjklsdvcx	6544	9745	5KCXhGs9-YBBrSKGKNvk4
RETRuatyfosdf	7484	6544	tSTD44CiOI6HfsQh2rMKj
FFUYGUIsdhoifp	5944	6475	tSTD44CiOI6HfsQh2rMKj
VBJVDosifspodi	5546	9884	BNVmsuyuuia_sa6a
PISYDfohvcxv	6555	7989	BNVmsuyuuia_sa6a
BMVNBsdjfs	9875	7846	fgs_uyoasilcv65sa4_ew
OPYDifjvlcxvc	3154	4564	fgs_uyoasilcv65sa4_ew
XZhozdjfhdfd	6487	7654	BNVmsuyuuia_sa6a
HZXFGoopdfs	6475	3211	opuupMXCs
QeorwpoefoQAEo	4697	9875	opuupMXCs
NCLKvnHjdsg	3245	5465	opuupMXCs
\.


--
-- TOC entry 3140 (class 0 OID 76721)
-- Dependencies: 212
-- Data for Name: number_equipment; Type: TABLE DATA; Schema: sptd; Owner: postgres
--

COPY sptd.number_equipment (number_id, "inventoryNumber", "codeEquipment", equipment_id) FROM stdin;
klKJDksf	4574	4323	kfDGfspjdsfsd54dsf
IUsidkfdv	9454	7322	kfDGfspjdsfsd54dsf
JDFLKhsdfdsf	2645	4564	dsfgsDFSssd5ds
xcvHKLDHSfs	5984	6789	BDaTIyoiKLJl
cxvJLJDsfsfsd	4587	3567	BDaTIyoiKLJl
NBnvxmneUIfe	8945	6485	BNdsfhjkslKF
DCVsdjsdfUiera	4567	4597	BNdsfhjkslKF
UYIuwpoaYA	6785	5486	PIOOPDeRTERUyiuoio
BnmdfsoeOPOE	8439	9946	PIOOPDeRTERUyiuoio
JKJHDkfss6sdf	5487	8789	VBCNMVMNMewi
TYIUDfsdlfs	5464	8452	VBCNMVMNMewi
KHDVjsdfssdfs	7845	4567	UYid54LKPouid
KDHfklshfsd	9156	6457	dsfgsDFSssd5ds
NJOI54TRUio	7989	3215	OPpoITUBvm564Dfp
VNCriyoa9xvb	4567	7466	OPpoITUBvm564Dfp
LKkjoisewqrq	3154	1656	OPpoITUBvm564Dfp
fvbnvsfsdDfsc	6454	3644	OPiUYUpocxv
UOOINnvmncx	2465	5745	OPiUYUpocxv
MBBVNPIIfg5jg56	7984	6944	OPiUYUpocxv
\.


--
-- TOC entry 3141 (class 0 OID 76724)
-- Dependencies: 213
-- Data for Name: number_tool; Type: TABLE DATA; Schema: sptd; Owner: postgres
--

COPY sptd.number_tool (number_id, "inventoryNumber", "codeTool", tool_id) FROM stdin;
JHFjdsocxjRUTY	5687	6547	xcKJDijkUosdiocxv
NBVnbsdfouiodR	4654	9878	xcKJDijkUosdiocxv
BCBNBxcviyUIy	2654	4875	RtiopkLJKDJKfs64_
KJdhfksdfYRUYT	6457	1975	RtiopkLJKDJKfs64_
LJkasSRARpiR	2364	3978	PsdfofsjdARACNXbv
OPEuarlzdpiasDF	4569	5645	PsdfofsjdARACNXbv
NBCVMVzxpdsupo	6544	7895	PsdfofsjdARACNXbv
QWwqrPOPi_3q43	8954	9754	OPdiPoeiorpalCBvx
CNMvcsdaoueap	4979	5978	OPdiPoeiorpalCBvx
Ldfjrwipoa__Dfj	5645	4975	OPdiPoeiorpalCBvx
NCXMVd54_DSfhi	9784	4566	OPdiPoeiorpalCBvx
ZxczYURdaUYljdf	3564	7894	NBCXMspitQWEqu
JBCVNDSJpjrpUepr	8978	1295	NBCXMspitQWEqu
JKBDVshlehrkeje	7985	5654	NBCXMspitQWEqu
UTESoiruoakjdvlxcn	3456	7989	2pUtC_G6xAtN0ZAkPBADk
MBCVOUOSEUTOdsd	4975	5689	2pUtC_G6xAtN0ZAkPBADk
mcvbuishdfdf	7546	6554	mmFqXc0qIXJhcy_6hv8Gy
DUSToufriae	5646	8944	mmFqXc0qIXJhcy_6hv8Gy
KSHvdoishejfr	3497	7848	mmFqXc0qIXJhcy_6hv8Gy
KSDHGllkLDGFL	4565	9554	gbo-DoNpqjRKWbtwRGDi1
KHYADOUerhnl	6555	4579	gbo-DoNpqjRKWbtwRGDi1
KLDJSGfosaierj	8777	4444	gbo-DoNpqjRKWbtwRGDi1
\.


--
-- TOC entry 3142 (class 0 OID 76727)
-- Dependencies: 214
-- Data for Name: oper; Type: TABLE DATA; Schema: sptd; Owner: postgres
--

COPY sptd.oper (oper_id, "nameOperation", "numberOperation", workshop, area, "OO", "OTK", "PZ", "KPS", tech_id) FROM stdin;
1	Сверлильная	010	12	14	t	f	t	f	3
11	Координатно-расточная	020	21	15	t	f	t	f	3
7	Токарная	020	21	20	f	t	t	f	2
DoBQfVLTQgzaRCaOLROw-	Зуборезная	030	157	5456	f	t	f	t	2
3CEoKuqtrpHIdMbW3TwAj	Фрезерная	010	1547	1845	f	f	f	f	IQpEd0DxR0d-gjfQnDjgM
12	Координатно-расточная	010	9	11	t	t	f	f	gO1NLyBJ9f4xi2jAu1RF9
13	Хонинговальная	020	15	11	t	f	f	t	gO1NLyBJ9f4xi2jAu1RF9
tulnBu64-dyIMADovi87z	Фрезерная операция	030	57	54	f	t	f	t	gO1NLyBJ9f4xi2jAu1RF9
vX6NcMJpkBfpBvHjCZtOC	Токарная операция	040	22	77	f	t	t	f	gO1NLyBJ9f4xi2jAu1RF9
Bu0vYEFoxy_JiHxYF7Mzh	Суперфиниш	050	33	97	f	t	f	t	gO1NLyBJ9f4xi2jAu1RF9
10	 Фрезерная	010	21	15	t	t	f	t	2
4kjyejY-CnTFYR-UwSTZS	Координатно-расточная	040	547	457	f	t	f	t	2
0-hz9PoDvAn4oIJKdWi6g	Шлифовальная	010	1574	5484	f	t	f	f	f6WmFNNwEp4RYP5Vat0q7
-GMtkMj60bRHJOeyeuzWE	Координатно-расточная	010	154	545	f	t	f	t	PE_iVjDNOSE-ckhwfZwpx
\.


--
-- TOC entry 3143 (class 0 OID 76730)
-- Dependencies: 215
-- Data for Name: oper_adaptation; Type: TABLE DATA; Schema: sptd; Owner: postgres
--

COPY sptd.oper_adaptation (oper_id, adaptation_id, number_id) FROM stdin;
12	opuupMXCs	QeorwpoefoQAEo
tulnBu64-dyIMADovi87z	_zBlX5F2QpstZJLCDUISe	YITUyoilsdl5as
Bu0vYEFoxy_JiHxYF7Mzh	_zBlX5F2QpstZJLCDUISe	VCVHKGHLIyidsf
7	5KCXhGs9-YBBrSKGKNvk4	Lklsdfjklsdvcx
10	5KCXhGs9-YBBrSKGKNvk4	Iousdfosd
10	opuupMXCs	QeorwpoefoQAEo
DoBQfVLTQgzaRCaOLROw-	_zBlX5F2QpstZJLCDUISe	YITUyoilsdl5as
4kjyejY-CnTFYR-UwSTZS	tSTD44CiOI6HfsQh2rMKj	FFUYGUIsdhoifp
13	opuupMXCs	HZXFGoopdfs
vX6NcMJpkBfpBvHjCZtOC	5KCXhGs9-YBBrSKGKNvk4	Iousdfosd
0-hz9PoDvAn4oIJKdWi6g	5KCXhGs9-YBBrSKGKNvk4	Iousdfosd
0-hz9PoDvAn4oIJKdWi6g	fgs_uyoasilcv65sa4_ew	BMVNBsdjfs
-GMtkMj60bRHJOeyeuzWE	5KCXhGs9-YBBrSKGKNvk4	Lklsdfjklsdvcx
\.


--
-- TOC entry 3144 (class 0 OID 76733)
-- Dependencies: 216
-- Data for Name: oper_equipment; Type: TABLE DATA; Schema: sptd; Owner: postgres
--

COPY sptd.oper_equipment (oper_id, equipment_id, number_id) FROM stdin;
7	kfDGfspjdsfsd54dsf	klKJDksf
DoBQfVLTQgzaRCaOLROw-	PIOOPDeRTERUyiuoio	UYIuwpoaYA
3CEoKuqtrpHIdMbW3TwAj	dsfgsDFSssd5ds	KDHfklshfsd
tulnBu64-dyIMADovi87z	dsfgsDFSssd5ds	JDFLKhsdfdsf
vX6NcMJpkBfpBvHjCZtOC	kfDGfspjdsfsd54dsf	IUsidkfdv
13	OPpoITUBvm564Dfp	DCVsdjsdfUiera
1	BNdsfhjkslKF	NBnvxmneUIfe
12	OPiUYUpocxv	UOOINnvmncx
11	OPiUYUpocxv	UOOINnvmncx
Bu0vYEFoxy_JiHxYF7Mzh	OPiUYUpocxv	UOOINnvmncx
4kjyejY-CnTFYR-UwSTZS	OPiUYUpocxv	fvbnvsfsdDfsc
10	dsfgsDFSssd5ds	JDFLKhsdfdsf
0-hz9PoDvAn4oIJKdWi6g	dsfgsDFSssd5ds	KDHfklshfsd
-GMtkMj60bRHJOeyeuzWE	OPiUYUpocxv	UOOINnvmncx
\.


--
-- TOC entry 3146 (class 0 OID 76738)
-- Dependencies: 218
-- Data for Name: oper_tool; Type: TABLE DATA; Schema: sptd; Owner: postgres
--

COPY sptd.oper_tool (oper_id, tool_id, number_id) FROM stdin;
7	RtiopkLJKDJKfs64_	KJdhfksdfYRUYT
DoBQfVLTQgzaRCaOLROw-	xcKJDijkUosdiocxv	NBVnbsdfouiodR
7	NBCXMspitQWEqu	JBCVNDSJpjrpUepr
7	gbo-DoNpqjRKWbtwRGDi1	KHYADOUerhnl
4kjyejY-CnTFYR-UwSTZS	NBCXMspitQWEqu	JBCVNDSJpjrpUepr
10	OPdiPoeiorpalCBvx	QWwqrPOPi_3q43
10	RtiopkLJKDJKfs64_	KJdhfksdfYRUYT
12	2pUtC_G6xAtN0ZAkPBADk	UTESoiruoakjdvlxcn
13	2pUtC_G6xAtN0ZAkPBADk	UTESoiruoakjdvlxcn
tulnBu64-dyIMADovi87z	OPdiPoeiorpalCBvx	CNMvcsdaoueap
vX6NcMJpkBfpBvHjCZtOC	RtiopkLJKDJKfs64_	BCBNBxcviyUIy
vX6NcMJpkBfpBvHjCZtOC	NBCXMspitQWEqu	ZxczYURdaUYljdf
vX6NcMJpkBfpBvHjCZtOC	xcKJDijkUosdiocxv	JHFjdsocxjRUTY
vX6NcMJpkBfpBvHjCZtOC	PsdfofsjdARACNXbv	LJkasSRARpiR
vX6NcMJpkBfpBvHjCZtOC	mmFqXc0qIXJhcy_6hv8Gy	DUSToufriae
Bu0vYEFoxy_JiHxYF7Mzh	gbo-DoNpqjRKWbtwRGDi1	KLDJSGfosaierj
0-hz9PoDvAn4oIJKdWi6g	mmFqXc0qIXJhcy_6hv8Gy	DUSToufriae
0-hz9PoDvAn4oIJKdWi6g	xcKJDijkUosdiocxv	JHFjdsocxjRUTY
-GMtkMj60bRHJOeyeuzWE	OPdiPoeiorpalCBvx	QWwqrPOPi_3q43
\.


--
-- TOC entry 3148 (class 0 OID 76743)
-- Dependencies: 220
-- Data for Name: tech; Type: TABLE DATA; Schema: sptd; Owner: postgres
--

COPY sptd.tech (tech_id, "techName", "techMark", "techWorkshop") FROM stdin;
gO1NLyBJ9f4xi2jAu1RF9	Ступенчатый вал	1544	501
3	Лонжерон	4975	505
IQpEd0DxR0d-gjfQnDjgM	Подшипник	1597	587
f6WmFNNwEp4RYP5Vat0q7	Кронштейн	5975	587
2	Втулка	5984	509
PE_iVjDNOSE-ckhwfZwpx	Лонжерон	1597	5975
\.


--
-- TOC entry 3149 (class 0 OID 76747)
-- Dependencies: 221
-- Data for Name: tech_fusion; Type: TABLE DATA; Schema: sptd; Owner: postgres
--

COPY sptd.tech_fusion (tech_id, fusion_id, metal_id, mark_id, form_id) FROM stdin;
IQpEd0DxR0d-gjfQnDjgM	xzzcdsfszDS	uSDDjdfsf65Dfsdd	spxsdfDdfd	sdfgssd6f54c
2	CIGSxczdf8	jsaJSdacsdf5scv	asdkhxcolvx8dsfs	jsdfxcvds
3	CIGSxczdf8	jsaJSdacsdf5scv	dfgissdfsd	jsdfxcvds
gO1NLyBJ9f4xi2jAu1RF9	xzzcdsfszDS	asdKsa7s5a	cvbsfsDfs8df	sdfgssd6f54c
f6WmFNNwEp4RYP5Vat0q7	xzzcdsfszDS	uSDDjdfsf65Dfsdd	spxsdfDdfd	xcKKJDfsl54sdf
PE_iVjDNOSE-ckhwfZwpx	xzzcdsfszDS	uSDDjdfsf65Dfsdd	spxsdfDdfd	jsdfxcvds
\.


--
-- TOC entry 3150 (class 0 OID 76750)
-- Dependencies: 222
-- Data for Name: tool; Type: TABLE DATA; Schema: sptd; Owner: postgres
--

COPY sptd.tool (tool_id, "nameTool") FROM stdin;
2pUtC_G6xAtN0ZAkPBADk	Хон
mmFqXc0qIXJhcy_6hv8Gy	Расточная головка
gbo-DoNpqjRKWbtwRGDi1	Суперфинишная головка
xcKJDijkUosdiocxv	Плашка
RtiopkLJKDJKfs64_	Резец
OPdiPoeiorpalCBvx	Фреза
NBCXMspitQWEqu	Сверло
PsdfofsjdARACNXbv	Метчик
\.


--
-- TOC entry 3152 (class 0 OID 76755)
-- Dependencies: 224
-- Data for Name: transition; Type: TABLE DATA; Schema: sptd; Owner: postgres
--

COPY sptd.transition (trans_id, "nameTransition", oper_id) FROM stdin;
1	Закрепить деталь	1
10	Закрепить деталь	1
6	Закрепить деталь	11
11	Повернуть деталь	1
21	Снять деталь	1
52	Снять деталь	7
no3ejrCf0KYcBLZSgBWEj	Закрепить деталь	vX6NcMJpkBfpBvHjCZtOC
C3HZpLvfrZykeySvWKop3	Закрепить деталь	Bu0vYEFoxy_JiHxYF7Mzh
ox5ook65V2CPvoD6dNKQi	Закрепить деталь	DoBQfVLTQgzaRCaOLROw-
CBUzxS7gwuL0gb3uhBnzO	Закрепить деталь	3CEoKuqtrpHIdMbW3TwAj
25xnUV1qF7H9_-tdStAx7	Закрепить деталь	4kjyejY-CnTFYR-UwSTZS
tXdSYBmGburLiMEZba__1	Просверлить отверстия	10
nKNEqCPtpNZ7ZfxSU90aW	Просверлить отверстие	13
tPDLFuss7tuh7K7SEAQ1o	Установить заготовку	12
TlM5gM_VqNvdCulUXspQ2	Закрепить заготовку	13
0_hvkj7EHIPVtjpr1RU6t	Проточить торец	12
oMTHY-C6TX9XLwWq9eD03	Обточить поверхность	tulnBu64-dyIMADovi87z
7_e4PSSwzVDUEkOOGEJmS	Установить заготовку	tulnBu64-dyIMADovi87z
365TZDCJxd07zxl1ZHBWm	Просверлить отверстие фрезой	0-hz9PoDvAn4oIJKdWi6g
oiwPwUwGGWAhaVA2QsM81	Просверлить отверстие	-GMtkMj60bRHJOeyeuzWE
\.


--
-- TOC entry 3167 (class 0 OID 0)
-- Dependencies: 202
-- Name: adaptation_adaptation_id_seq; Type: SEQUENCE SET; Schema: sptd; Owner: postgres
--

SELECT pg_catalog.setval('sptd.adaptation_adaptation_id_seq', 12, true);


--
-- TOC entry 3168 (class 0 OID 0)
-- Dependencies: 204
-- Name: equipment_equipment_id_seq; Type: SEQUENCE SET; Schema: sptd; Owner: postgres
--

SELECT pg_catalog.setval('sptd.equipment_equipment_id_seq', 35, true);


--
-- TOC entry 3169 (class 0 OID 0)
-- Dependencies: 206
-- Name: executor_executor_id_seq; Type: SEQUENCE SET; Schema: sptd; Owner: postgres
--

SELECT pg_catalog.setval('sptd.executor_executor_id_seq', 29, true);


--
-- TOC entry 3170 (class 0 OID 0)
-- Dependencies: 207
-- Name: executor_trans_id_seq; Type: SEQUENCE SET; Schema: sptd; Owner: postgres
--

SELECT pg_catalog.setval('sptd.executor_trans_id_seq', 6, true);


--
-- TOC entry 3171 (class 0 OID 0)
-- Dependencies: 217
-- Name: oper_oper_id_seq; Type: SEQUENCE SET; Schema: sptd; Owner: postgres
--

SELECT pg_catalog.setval('sptd.oper_oper_id_seq', 15, true);


--
-- TOC entry 3172 (class 0 OID 0)
-- Dependencies: 219
-- Name: tech_tech_id_seq; Type: SEQUENCE SET; Schema: sptd; Owner: postgres
--

SELECT pg_catalog.setval('sptd.tech_tech_id_seq', 33, true);


--
-- TOC entry 3173 (class 0 OID 0)
-- Dependencies: 223
-- Name: tool_tool_id_seq; Type: SEQUENCE SET; Schema: sptd; Owner: postgres
--

SELECT pg_catalog.setval('sptd.tool_tool_id_seq', 15, true);


--
-- TOC entry 3174 (class 0 OID 0)
-- Dependencies: 225
-- Name: transition_trans_id_seq; Type: SEQUENCE SET; Schema: sptd; Owner: postgres
--

SELECT pg_catalog.setval('sptd.transition_trans_id_seq', 62, true);


--
-- TOC entry 2942 (class 2606 OID 76771)
-- Name: adaptation adaptation_pkey; Type: CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.adaptation
    ADD CONSTRAINT adaptation_pkey PRIMARY KEY (adaptation_id);


--
-- TOC entry 2944 (class 2606 OID 76773)
-- Name: equipment equipment_pkey; Type: CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.equipment
    ADD CONSTRAINT equipment_pkey PRIMARY KEY (equipment_id);


--
-- TOC entry 2946 (class 2606 OID 76775)
-- Name: executor executor_pkey; Type: CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.executor
    ADD CONSTRAINT executor_pkey PRIMARY KEY (executor_id);


--
-- TOC entry 2948 (class 2606 OID 76777)
-- Name: fusion fusion_pk; Type: CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.fusion
    ADD CONSTRAINT fusion_pk PRIMARY KEY (fusion_id);


--
-- TOC entry 2950 (class 2606 OID 76779)
-- Name: kind_metals kindmetals_pk; Type: CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.kind_metals
    ADD CONSTRAINT kindmetals_pk PRIMARY KEY (metal_id);


--
-- TOC entry 2952 (class 2606 OID 76781)
-- Name: mark_metals markmetal_pk; Type: CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.mark_metals
    ADD CONSTRAINT markmetal_pk PRIMARY KEY (mark_id);


--
-- TOC entry 2954 (class 2606 OID 76783)
-- Name: number_adaptation number_adaptation_pk; Type: CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.number_adaptation
    ADD CONSTRAINT number_adaptation_pk PRIMARY KEY (number_id);


--
-- TOC entry 2958 (class 2606 OID 76785)
-- Name: number_tool number_tool_pk; Type: CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.number_tool
    ADD CONSTRAINT number_tool_pk PRIMARY KEY (number_id);


--
-- TOC entry 2956 (class 2606 OID 76787)
-- Name: number_equipment numberequipment_pk; Type: CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.number_equipment
    ADD CONSTRAINT numberequipment_pk PRIMARY KEY (number_id);


--
-- TOC entry 2962 (class 2606 OID 76789)
-- Name: oper_adaptation oper_adaptation_pk; Type: CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.oper_adaptation
    ADD CONSTRAINT oper_adaptation_pk PRIMARY KEY (oper_id, adaptation_id, number_id);


--
-- TOC entry 2964 (class 2606 OID 76791)
-- Name: oper_equipment oper_equipment_pk; Type: CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.oper_equipment
    ADD CONSTRAINT oper_equipment_pk PRIMARY KEY (oper_id);


--
-- TOC entry 2960 (class 2606 OID 76793)
-- Name: oper oper_pkey; Type: CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.oper
    ADD CONSTRAINT oper_pkey PRIMARY KEY (oper_id);


--
-- TOC entry 2966 (class 2606 OID 76795)
-- Name: oper_tool oper_tool_pk; Type: CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.oper_tool
    ADD CONSTRAINT oper_tool_pk PRIMARY KEY (oper_id, tool_id, number_id);


--
-- TOC entry 2970 (class 2606 OID 76797)
-- Name: tech_fusion tech_fusion_pk; Type: CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.tech_fusion
    ADD CONSTRAINT tech_fusion_pk PRIMARY KEY (tech_id, fusion_id, metal_id, mark_id, form_id);


--
-- TOC entry 2968 (class 2606 OID 76799)
-- Name: tech tech_pk; Type: CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.tech
    ADD CONSTRAINT tech_pk PRIMARY KEY (tech_id);


--
-- TOC entry 2972 (class 2606 OID 76801)
-- Name: tool tool_pkey; Type: CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.tool
    ADD CONSTRAINT tool_pkey PRIMARY KEY (tool_id);


--
-- TOC entry 2974 (class 2606 OID 76803)
-- Name: transition transition_trans_id_key; Type: CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.transition
    ADD CONSTRAINT transition_trans_id_key UNIQUE (trans_id);


--
-- TOC entry 2976 (class 2606 OID 76805)
-- Name: initial_form zagotovky_pk; Type: CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.initial_form
    ADD CONSTRAINT zagotovky_pk PRIMARY KEY (form_id);


--
-- TOC entry 2977 (class 2606 OID 76806)
-- Name: executor executor_fk; Type: FK CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.executor
    ADD CONSTRAINT executor_fk FOREIGN KEY (trans_id) REFERENCES sptd.transition(trans_id) ON DELETE CASCADE;


--
-- TOC entry 2993 (class 2606 OID 76811)
-- Name: tech_fusion fusion_id_fk; Type: FK CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.tech_fusion
    ADD CONSTRAINT fusion_id_fk FOREIGN KEY (fusion_id) REFERENCES sptd.fusion(fusion_id) ON DELETE CASCADE;


--
-- TOC entry 2978 (class 2606 OID 76816)
-- Name: kind_metals kindmetals_fk; Type: FK CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.kind_metals
    ADD CONSTRAINT kindmetals_fk FOREIGN KEY (fusion_id) REFERENCES sptd.fusion(fusion_id) ON DELETE CASCADE;


--
-- TOC entry 2994 (class 2606 OID 76821)
-- Name: tech_fusion mark_id_fk; Type: FK CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.tech_fusion
    ADD CONSTRAINT mark_id_fk FOREIGN KEY (mark_id) REFERENCES sptd.mark_metals(mark_id) ON DELETE CASCADE;


--
-- TOC entry 2979 (class 2606 OID 76826)
-- Name: mark_metals markmetal_fk; Type: FK CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.mark_metals
    ADD CONSTRAINT markmetal_fk FOREIGN KEY (metal_id) REFERENCES sptd.kind_metals(metal_id) ON DELETE CASCADE;


--
-- TOC entry 2995 (class 2606 OID 76831)
-- Name: tech_fusion metal_id_fk; Type: FK CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.tech_fusion
    ADD CONSTRAINT metal_id_fk FOREIGN KEY (metal_id) REFERENCES sptd.kind_metals(metal_id) ON DELETE CASCADE;


--
-- TOC entry 2980 (class 2606 OID 76836)
-- Name: number_adaptation number_adaptation_fk; Type: FK CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.number_adaptation
    ADD CONSTRAINT number_adaptation_fk FOREIGN KEY (adaptation_id) REFERENCES sptd.adaptation(adaptation_id) ON DELETE CASCADE;


--
-- TOC entry 2982 (class 2606 OID 76841)
-- Name: number_tool number_tool_fk; Type: FK CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.number_tool
    ADD CONSTRAINT number_tool_fk FOREIGN KEY (tool_id) REFERENCES sptd.tool(tool_id) ON DELETE CASCADE;


--
-- TOC entry 2981 (class 2606 OID 76846)
-- Name: number_equipment numberequipment_fk; Type: FK CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.number_equipment
    ADD CONSTRAINT numberequipment_fk FOREIGN KEY (equipment_id) REFERENCES sptd.equipment(equipment_id) ON DELETE CASCADE;


--
-- TOC entry 2984 (class 2606 OID 76851)
-- Name: oper_adaptation oper_adaptation_fk; Type: FK CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.oper_adaptation
    ADD CONSTRAINT oper_adaptation_fk FOREIGN KEY (oper_id) REFERENCES sptd.oper(oper_id) ON DELETE CASCADE;


--
-- TOC entry 2985 (class 2606 OID 76856)
-- Name: oper_adaptation oper_adaptation_fk_2; Type: FK CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.oper_adaptation
    ADD CONSTRAINT oper_adaptation_fk_2 FOREIGN KEY (adaptation_id) REFERENCES sptd.adaptation(adaptation_id) ON DELETE CASCADE;


--
-- TOC entry 2986 (class 2606 OID 76861)
-- Name: oper_adaptation oper_adaptation_fk_3; Type: FK CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.oper_adaptation
    ADD CONSTRAINT oper_adaptation_fk_3 FOREIGN KEY (number_id) REFERENCES sptd.number_adaptation(number_id) ON DELETE CASCADE;


--
-- TOC entry 2987 (class 2606 OID 76866)
-- Name: oper_equipment oper_equipment_fk; Type: FK CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.oper_equipment
    ADD CONSTRAINT oper_equipment_fk FOREIGN KEY (oper_id) REFERENCES sptd.oper(oper_id) ON DELETE CASCADE;


--
-- TOC entry 2988 (class 2606 OID 76871)
-- Name: oper_equipment oper_equipment_fk_1; Type: FK CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.oper_equipment
    ADD CONSTRAINT oper_equipment_fk_1 FOREIGN KEY (equipment_id) REFERENCES sptd.equipment(equipment_id) ON DELETE CASCADE;


--
-- TOC entry 2989 (class 2606 OID 76876)
-- Name: oper_equipment oper_equipment_fk_2; Type: FK CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.oper_equipment
    ADD CONSTRAINT oper_equipment_fk_2 FOREIGN KEY (number_id) REFERENCES sptd.number_equipment(number_id) ON DELETE CASCADE;


--
-- TOC entry 2983 (class 2606 OID 76881)
-- Name: oper oper_fk; Type: FK CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.oper
    ADD CONSTRAINT oper_fk FOREIGN KEY (tech_id) REFERENCES sptd.tech(tech_id) ON DELETE CASCADE;


--
-- TOC entry 2990 (class 2606 OID 76886)
-- Name: oper_tool oper_tool_fk; Type: FK CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.oper_tool
    ADD CONSTRAINT oper_tool_fk FOREIGN KEY (oper_id) REFERENCES sptd.oper(oper_id) ON DELETE CASCADE;


--
-- TOC entry 2991 (class 2606 OID 76891)
-- Name: oper_tool oper_tool_fk_2; Type: FK CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.oper_tool
    ADD CONSTRAINT oper_tool_fk_2 FOREIGN KEY (tool_id) REFERENCES sptd.tool(tool_id) ON DELETE CASCADE;


--
-- TOC entry 2992 (class 2606 OID 76896)
-- Name: oper_tool oper_tool_fk_3; Type: FK CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.oper_tool
    ADD CONSTRAINT oper_tool_fk_3 FOREIGN KEY (number_id) REFERENCES sptd.number_tool(number_id) ON DELETE CASCADE;


--
-- TOC entry 2996 (class 2606 OID 76901)
-- Name: tech_fusion tech_fusion_fk; Type: FK CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.tech_fusion
    ADD CONSTRAINT tech_fusion_fk FOREIGN KEY (form_id) REFERENCES sptd.initial_form(form_id) ON DELETE CASCADE;


--
-- TOC entry 2997 (class 2606 OID 76906)
-- Name: tech_fusion tech_id_fk; Type: FK CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.tech_fusion
    ADD CONSTRAINT tech_id_fk FOREIGN KEY (tech_id) REFERENCES sptd.tech(tech_id) ON DELETE CASCADE;


--
-- TOC entry 2998 (class 2606 OID 76911)
-- Name: transition transition_fk; Type: FK CONSTRAINT; Schema: sptd; Owner: postgres
--

ALTER TABLE ONLY sptd.transition
    ADD CONSTRAINT transition_fk FOREIGN KEY (oper_id) REFERENCES sptd.oper(oper_id) ON DELETE CASCADE;


-- Completed on 2022-05-22 09:02:09

--
-- PostgreSQL database dump complete
--

