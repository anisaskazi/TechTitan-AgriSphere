export const crops=[
{id:'wheat',name:'Wheat',emoji:'🌾',season:'Rabi',group:'Grains',duration:120,water:'Medium',soil:'Loamy',color:'gold',detail:'A cool-season grain grown across many regions. Timing, varieties and irrigation requirements depend on local conditions.'},
{id:'rice',name:'Rice',emoji:'🌱',season:'Kharif',group:'Grains',duration:125,water:'High',soil:'Clay',color:'green',detail:'Paddy management varies with variety, rainfall, soil and production system. Consider drainage and local water availability.'},
{id:'maize',name:'Maize',emoji:'🌽',season:'Kharif',group:'Grains',duration:105,water:'Medium',soil:'Loamy',color:'amber',detail:'A versatile crop cultivated across seasons. Verify locally suitable hybrid and sowing window.'},
{id:'cotton',name:'Cotton',emoji:'☁️',season:'Kharif',group:'Cash crops',duration:165,water:'Medium',soil:'Black',color:'mint',detail:'Monitoring pests, rainfall and the growth stage is important for cotton fields.'},
{id:'soybean',name:'Soybean',emoji:'🫘',season:'Kharif',group:'Pulses',duration:100,water:'Medium',soil:'Loamy',color:'peach',detail:'A short-duration legume. Good drainage and locally recommended varieties are important.'},
{id:'chickpea',name:'Chickpea',emoji:'🫛',season:'Rabi',group:'Pulses',duration:110,water:'Low',soil:'Black',color:'sage',detail:'Adapted to cooler seasons in many areas; avoid prolonged waterlogging.'},
{id:'groundnut',name:'Groundnut',emoji:'🥜',season:'Kharif',group:'Oilseeds',duration:115,water:'Medium',soil:'Sandy',color:'sand',detail:'Requires careful attention to drainage, field preparation, and harvest conditions.'},
{id:'mustard',name:'Mustard',emoji:'🌼',season:'Rabi',group:'Oilseeds',duration:120,water:'Low',soil:'Loamy',color:'gold',detail:'An oilseed crop grown in cooler seasons. Confirm suitable sowing time regionally.'},
{id:'tomato',name:'Tomato',emoji:'🍅',season:'Multiple',group:'Vegetables',duration:95,water:'Medium',soil:'Loamy',color:'coral',detail:'Regular scouting and hygiene are important. Disease symptoms require expert identification.'},
{id:'onion',name:'Onion',emoji:'🧅',season:'Multiple',group:'Vegetables',duration:120,water:'Medium',soil:'Loamy',color:'rose',detail:'Storage quality is strongly influenced by curing, ventilation and harvest timing.'},
{id:'potato',name:'Potato',emoji:'🥔',season:'Rabi',group:'Vegetables',duration:105,water:'Medium',soil:'Sandy',color:'sand',detail:'Tuber crop requiring appropriate temperature, moisture management and storage.'},
{id:'chilli',name:'Chilli',emoji:'🌶️',season:'Multiple',group:'Vegetables',duration:150,water:'Medium',soil:'Loamy',color:'coral',detail:'Temperature and pest pressure affect management; scout plants regularly.'},
{id:'sugarcane',name:'Sugarcane',emoji:'🎋',season:'Long duration',group:'Cash crops',duration:365,water:'High',soil:'Loamy',color:'green',detail:'Long-season crop with significant water and nutrient planning requirements.'},
{id:'turmeric',name:'Turmeric',emoji:'🌿',season:'Kharif',group:'Spices',duration:240,water:'Medium',soil:'Loamy',color:'amber',detail:'Spice rhizome crop that benefits from well-drained soil and careful post-harvest handling.'},
{id:'banana',name:'Banana',emoji:'🍌',season:'Long duration',group:'Fruits',duration:365,water:'High',soil:'Loamy',color:'gold',detail:'Perennial fruit requiring location-specific water management and wind protection.'},
{id:'mango',name:'Mango',emoji:'🥭',season:'Perennial',group:'Fruits',duration:365,water:'Medium',soil:'Loamy',color:'peach',detail:'Orchard management varies with climate, tree age, and local practices.'}
];
export const services=[
{route:'soil',icon:'flask',title:'Soil health',desc:'Record soil reports and understand your land.',color:'mint'},
{route:'planner',icon:'sprout',title:'Crop planning',desc:'Choose crops and plan sowing dates.',color:'gold'},
{route:'tasks',icon:'calendar',title:'Daily farm tasks',desc:'Track irrigation and field activities.',color:'sky'},
{route:'health',icon:'activity',title:'Crop health',desc:'Document symptoms and field observations.',color:'peach'},
{route:'harvest',icon:'wheat',title:'Harvest & yield',desc:'Plan output and record the harvest.',color:'sage'},
{route:'prices',icon:'trending',title:'Market & prices',desc:'Compare buyer quotes and margins.',color:'lavender'},
{route:'storage',icon:'package',title:'Storage & logistics',desc:'Track batches and dispatches.',color:'sand'},
{route:'finance',icon:'wallet',title:'Finance & schemes',desc:'Know expenses, income and resources.',color:'rose'}
];
export const learning=[
{title:'How to start a soil test record',category:'Soil health',time:'4 min',icon:'flask',body:'Record the sampling date, soil pH, available nutrients, location and report reference. Compare with the local laboratory recommendations before any fertilizer decision.'},
{title:'Create a useful field task routine',category:'Farm management',time:'3 min',icon:'calendar',body:'Organize your field diary into scouting, irrigation, labour and harvest activities. Mark each task completed and record what changed in the field.'},
{title:'Prepare harvested crops for storage',category:'Post-harvest',time:'5 min',icon:'package',body:'Track lot identity, moisture observations, storage method and conditions. Practices depend on the crop; verify recommended thresholds with local post-harvest specialists.'},
{title:'Compare prices without overlooking costs',category:'Market',time:'4 min',icon:'chart',body:'Record each buyer offer using the same unit and quality grade. Deduct handling and transport costs from expected sales value to compare likely proceeds.'}
];
export const sources=[
{title:'Soil Health Card',type:'Soil & nutrient guidance',url:'https://soilhealth.dac.gov.in/',label:'Government of India'},
{title:'e-NAM',type:'National agricultural market',url:'https://enam.gov.in/',label:'Government of India'},
{title:'AGMARKNET',type:'Official agricultural market reporting',url:'https://agmarknet.gov.in/',label:'Government of India'},
{title:'PM-KISAN',type:'Scheme information and official status',url:'https://pmkisan.gov.in/',label:'Government of India'},
{title:'Open-Meteo',type:'Global location and weather forecasts',url:'https://open-meteo.com/',label:'Weather service'}
];
export const nav=[
{label:'Home',route:'home',icon:'home'},{label:'Explore crops',route:'crops',icon:'grid'},{label:'Market hub',route:'market',icon:'store'},{label:'My farm',route:'dashboard',icon:'layout'},{label:'Weather',route:'weather',icon:'sun'},{label:'Learn',route:'learn',icon:'book'}
];
