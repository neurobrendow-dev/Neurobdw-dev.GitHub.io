/* ===========================================================
   MEDICAMENTOS — base ampla focada em uso brasileiro.
   Cada item: { name (princípio ativo), aliases (marcas/sinônimos),
                presentations (lista textual de apresentações) }
   O nome é o princípio ativo; aliases são nomes comerciais comuns.
   O autocomplete pesquisa em `name` + `aliases`.

   Foco: neurologia (alto volume) + clínica geral comum (HAS, DM,
   dislipidemia, GI, antibiótico, analgesia, respiratório, tireoide).
   ~280 medicamentos × 3–7 apresentações.
=========================================================== */
window.MEDICATIONS = [

  /* =========================  NEUROLOGIA  ========================= */

  /* --- Antiepilépticos --- */
  { name: 'Ácido valproico / Divalproato de sódio', aliases: ['Depakene', 'Depakote', 'Torval', 'Valpakine'], presentations: [
    '250 mg cápsula', '250 mg comprimido', '500 mg comprimido revestido',
    '500 mg comprimido de liberação prolongada', '250 mg/5 mL xarope',
    '500 mg/5 mL xarope', '100 mg/mL solução oral'
  ]},
  { name: 'Brivaracetam', aliases: ['Briviact'], presentations: [
    '10 mg comprimido revestido', '25 mg comprimido revestido',
    '50 mg comprimido revestido', '75 mg comprimido revestido', '100 mg comprimido revestido',
    '10 mg/mL solução oral', '10 mg/mL solução injetável'
  ]},
  { name: 'Carbamazepina', aliases: ['Tegretol', 'Tegretard', 'Tegrex'], presentations: [
    '200 mg comprimido', '400 mg comprimido',
    '200 mg comprimido CR (liberação controlada)', '400 mg comprimido CR',
    '20 mg/mL suspensão oral', '100 mg/mL suspensão oral'
  ]},
  { name: 'Clobazam', aliases: ['Frisium', 'Urbanil'], presentations: [
    '10 mg comprimido', '20 mg comprimido'
  ]},
  { name: 'Clonazepam', aliases: ['Rivotril'], presentations: [
    '0,25 mg comprimido sublingual', '0,5 mg comprimido', '2 mg comprimido',
    '2,5 mg/mL solução oral (gotas)', '1 mg/mL solução injetável'
  ]},
  { name: 'Etossuximida', aliases: ['Petimid'], presentations: [
    '250 mg cápsula', '50 mg/mL xarope'
  ]},
  { name: 'Fenitoína', aliases: ['Hidantal', 'Epelin', 'Fenital'], presentations: [
    '100 mg comprimido', '50 mg/mL solução injetável (ampola 5 mL)',
    '20 mg/mL suspensão oral'
  ]},
  { name: 'Fenobarbital', aliases: ['Gardenal', 'Edhanol'], presentations: [
    '100 mg comprimido', '4 mg/mL gotas (40 mg/mL?)', '40 mg/mL elixir',
    '100 mg/mL solução injetável (ampola 1 mL)', '200 mg/mL solução injetável'
  ]},
  { name: 'Gabapentina', aliases: ['Neurontin', 'Progresse', 'Gamibetal'], presentations: [
    '300 mg cápsula', '400 mg cápsula', '600 mg comprimido revestido', '800 mg comprimido revestido'
  ]},
  { name: 'Lacosamida', aliases: ['Vimpat'], presentations: [
    '50 mg comprimido revestido', '100 mg comprimido revestido',
    '150 mg comprimido revestido', '200 mg comprimido revestido',
    '10 mg/mL xarope', '10 mg/mL solução injetável'
  ]},
  { name: 'Lamotrigina', aliases: ['Lamictal', 'Lamitor', 'Neurium'], presentations: [
    '25 mg comprimido', '50 mg comprimido', '100 mg comprimido', '200 mg comprimido',
    '5 mg comprimido dispersível', '25 mg comprimido dispersível', '100 mg comprimido dispersível'
  ]},
  { name: 'Levetiracetam', aliases: ['Keppra', 'Letiram'], presentations: [
    '250 mg comprimido revestido', '500 mg comprimido revestido',
    '750 mg comprimido revestido', '1000 mg comprimido revestido',
    '100 mg/mL solução oral', '100 mg/mL solução injetável'
  ]},
  { name: 'Oxcarbazepina', aliases: ['Trileptal', 'Oxcarb'], presentations: [
    '300 mg comprimido revestido', '600 mg comprimido revestido', '60 mg/mL suspensão oral'
  ]},
  { name: 'Perampanel', aliases: ['Fycompa'], presentations: [
    '2 mg comprimido revestido', '4 mg comprimido revestido',
    '6 mg comprimido revestido', '8 mg comprimido revestido', '10 mg comprimido revestido', '12 mg comprimido revestido'
  ]},
  { name: 'Pregabalina', aliases: ['Lyrica', 'Prebictal', 'Lyripar', 'Dorene'], presentations: [
    '25 mg cápsula', '50 mg cápsula', '75 mg cápsula',
    '100 mg cápsula', '150 mg cápsula', '300 mg cápsula', '20 mg/mL solução oral'
  ]},
  { name: 'Primidona', aliases: ['Primid'], presentations: [
    '100 mg comprimido', '250 mg comprimido'
  ]},
  { name: 'Topiramato', aliases: ['Topamax', 'Amato', 'Topiramax'], presentations: [
    '25 mg comprimido revestido', '50 mg comprimido revestido', '100 mg comprimido revestido'
  ]},
  { name: 'Vigabatrina', aliases: ['Sabril'], presentations: [
    '500 mg comprimido revestido', '500 mg sachê (granulado)'
  ]},
  { name: 'Zonisamida', aliases: ['Zonegran'], presentations: [
    '25 mg cápsula', '50 mg cápsula', '100 mg cápsula'
  ]},

  /* --- Anti-enxaqueca / cefaleia --- */
  { name: 'Sumatriptano', aliases: ['Imigran', 'Sumax'], presentations: [
    '25 mg comprimido revestido', '50 mg comprimido revestido', '100 mg comprimido revestido',
    '6 mg/0,5 mL solução injetável SC', '20 mg/dose spray nasal'
  ]},
  { name: 'Zolmitriptano', aliases: ['Zomig'], presentations: [
    '2,5 mg comprimido revestido', '2,5 mg comprimido orodispersível',
    '5 mg comprimido orodispersível', '5 mg/dose spray nasal'
  ]},
  { name: 'Naratriptano', aliases: ['Naramig'], presentations: ['2,5 mg comprimido revestido'] },
  { name: 'Rizatriptano', aliases: ['Maxalt', 'Maxalt-MLT'], presentations: [
    '5 mg comprimido orodispersível', '10 mg comprimido orodispersível',
    '10 mg comprimido revestido'
  ]},
  { name: 'Eletriptano', aliases: ['Relpax'], presentations: [
    '20 mg comprimido revestido', '40 mg comprimido revestido'
  ]},
  { name: 'Flunarizina', aliases: ['Vertix', 'Sibelium', 'Fluxxon', 'Flunaril'], presentations: [
    '10 mg cápsula', '5 mg comprimido', '10 mg comprimido'
  ]},
  { name: 'Cinarizina', aliases: ['Stugeron', 'Antigeron'], presentations: [
    '25 mg comprimido', '75 mg comprimido', '75 mg cápsula de liberação prolongada'
  ]},
  { name: 'Erenumabe', aliases: ['Pasurta'], presentations: [
    '70 mg/mL solução injetável SC (caneta)', '140 mg/mL solução injetável SC (caneta)'
  ]},
  { name: 'Galcanezumabe', aliases: ['Emgality'], presentations: [
    '120 mg/mL solução injetável SC (caneta)'
  ]},
  { name: 'Fremanezumabe', aliases: ['Ajovy'], presentations: [
    '225 mg/1,5 mL solução injetável SC'
  ]},
  { name: 'Toxina botulínica tipo A', aliases: ['Botox', 'Dysport', 'Prosigne', 'Xeomin'], presentations: [
    '100 U frasco-ampola pó liofilizado', '50 U frasco-ampola pó liofilizado',
    '500 U frasco-ampola pó liofilizado'
  ]},

  /* --- Antidepressivos --- */
  { name: 'Amitriptilina', aliases: ['Tryptanol', 'Amytril'], presentations: [
    '25 mg comprimido revestido', '75 mg comprimido revestido'
  ]},
  { name: 'Nortriptilina', aliases: ['Pamelor'], presentations: [
    '10 mg cápsula', '25 mg cápsula', '50 mg cápsula', '75 mg cápsula', '2 mg/mL solução oral'
  ]},
  { name: 'Imipramina', aliases: ['Tofranil'], presentations: [
    '10 mg drágea', '25 mg drágea', '75 mg comprimido de liberação prolongada'
  ]},
  { name: 'Clomipramina', aliases: ['Anafranil'], presentations: [
    '10 mg drágea', '25 mg drágea', '75 mg comprimido de liberação prolongada'
  ]},
  { name: 'Sertralina', aliases: ['Zoloft', 'Tolrest', 'Sercerin'], presentations: [
    '25 mg comprimido revestido', '50 mg comprimido revestido', '100 mg comprimido revestido',
    '20 mg/mL solução oral'
  ]},
  { name: 'Fluoxetina', aliases: ['Prozac', 'Daforin', 'Verotina', 'Eufor'], presentations: [
    '10 mg cápsula', '20 mg cápsula', '20 mg comprimido dispersível', '20 mg/5 mL solução oral'
  ]},
  { name: 'Paroxetina', aliases: ['Aropax', 'Pondera', 'Cebrilin', 'Roxetin'], presentations: [
    '12,5 mg comprimido revestido CR', '20 mg comprimido revestido', '25 mg comprimido revestido CR'
  ]},
  { name: 'Citalopram', aliases: ['Cipramil', 'Citta', 'Procimax'], presentations: [
    '20 mg comprimido revestido', '40 mg comprimido revestido', '20 mg/mL solução oral'
  ]},
  { name: 'Escitalopram', aliases: ['Lexapro', 'Reconter', 'Esci'], presentations: [
    '5 mg comprimido revestido', '10 mg comprimido revestido', '15 mg comprimido revestido',
    '20 mg comprimido revestido', '20 mg/mL solução oral'
  ]},
  { name: 'Venlafaxina', aliases: ['Efexor XR', 'Venlift OD', 'Venlaxin'], presentations: [
    '37,5 mg cápsula de liberação prolongada', '75 mg cápsula de liberação prolongada',
    '150 mg cápsula de liberação prolongada', '225 mg cápsula de liberação prolongada'
  ]},
  { name: 'Desvenlafaxina', aliases: ['Pristiq', 'Zinedif', 'Elifore'], presentations: [
    '50 mg comprimido de liberação prolongada', '100 mg comprimido de liberação prolongada'
  ]},
  { name: 'Duloxetina', aliases: ['Cymbalta', 'Velija', 'Duxete'], presentations: [
    '30 mg cápsula gastrorresistente', '60 mg cápsula gastrorresistente'
  ]},
  { name: 'Mirtazapina', aliases: ['Remeron', 'Menelat', 'Razapina'], presentations: [
    '15 mg comprimido revestido', '30 mg comprimido revestido', '45 mg comprimido revestido',
    '15 mg comprimido orodispersível', '30 mg comprimido orodispersível', '45 mg comprimido orodispersível'
  ]},
  { name: 'Trazodona', aliases: ['Donaren', 'Donaren retard'], presentations: [
    '50 mg comprimido', '100 mg comprimido', '150 mg comprimido de liberação prolongada'
  ]},
  { name: 'Bupropiona', aliases: ['Wellbutrin XL', 'Bup', 'Zyban', 'Zetron'], presentations: [
    '150 mg comprimido de liberação prolongada', '300 mg comprimido de liberação prolongada'
  ]},
  { name: 'Vortioxetina', aliases: ['Brintellix'], presentations: [
    '5 mg comprimido revestido', '10 mg comprimido revestido', '20 mg comprimido revestido'
  ]},
  { name: 'Agomelatina', aliases: ['Valdoxan'], presentations: ['25 mg comprimido revestido'] },

  /* --- Ansiolíticos / hipnóticos --- */
  { name: 'Alprazolam', aliases: ['Frontal', 'Apraz', 'Tranquinal'], presentations: [
    '0,25 mg comprimido', '0,5 mg comprimido', '1 mg comprimido', '2 mg comprimido',
    '0,5 mg comprimido de liberação prolongada', '1 mg comprimido de liberação prolongada',
    '2 mg comprimido de liberação prolongada'
  ]},
  { name: 'Diazepam', aliases: ['Valium', 'Compaz', 'Diazefast'], presentations: [
    '5 mg comprimido', '10 mg comprimido', '5 mg/mL solução injetável (ampola 2 mL)'
  ]},
  { name: 'Lorazepam', aliases: ['Lorax', 'Lorium'], presentations: [
    '1 mg comprimido', '2 mg comprimido'
  ]},
  { name: 'Bromazepam', aliases: ['Lexotan', 'Somalium'], presentations: [
    '3 mg comprimido', '6 mg comprimido'
  ]},
  { name: 'Midazolam', aliases: ['Dormonid', 'Dormire'], presentations: [
    '7,5 mg comprimido revestido', '15 mg comprimido revestido', '2 mg/mL solução oral',
    '5 mg/mL solução injetável (ampola 3 mL/10 mL)', '1 mg/mL solução injetável'
  ]},
  { name: 'Buspirona', aliases: ['Buspar', 'Brispar', 'Ansial'], presentations: [
    '5 mg comprimido', '10 mg comprimido'
  ]},
  { name: 'Hidroxizina', aliases: ['Hixizine', 'Pruri-gel'], presentations: [
    '25 mg comprimido revestido', '2 mg/mL xarope'
  ]},
  { name: 'Zolpidem', aliases: ['Stilnox', 'Lioram', 'Patz'], presentations: [
    '5 mg comprimido revestido', '10 mg comprimido revestido',
    '6,25 mg comprimido revestido CR', '12,5 mg comprimido revestido CR',
    '5 mg comprimido sublingual', '10 mg comprimido sublingual'
  ]},
  { name: 'Eszopiclona', aliases: ['Lunesta'], presentations: [
    '1 mg comprimido revestido', '2 mg comprimido revestido', '3 mg comprimido revestido'
  ]},
  { name: 'Melatonina', aliases: ['Slenyto', 'Circadin'], presentations: [
    '0,21 mg comprimido', '3 mg comprimido', '5 mg comprimido', '2 mg comprimido CR (Circadin)'
  ]},

  /* --- Antipsicóticos --- */
  { name: 'Haloperidol', aliases: ['Haldol'], presentations: [
    '1 mg comprimido', '5 mg comprimido', '2 mg/mL solução oral',
    '5 mg/mL solução injetável (ampola 1 mL)', '50 mg/mL decanoato injetável'
  ]},
  { name: 'Risperidona', aliases: ['Risperdal', 'Zargus', 'Riss', 'Respidon'], presentations: [
    '1 mg comprimido revestido', '2 mg comprimido revestido', '3 mg comprimido revestido',
    '1 mg/mL solução oral', '25 mg/2 mL injetável de liberação prolongada (Consta)'
  ]},
  { name: 'Quetiapina', aliases: ['Seroquel XRO', 'Quetros', 'Quetiapin', 'Q-pin'], presentations: [
    '25 mg comprimido revestido', '100 mg comprimido revestido', '200 mg comprimido revestido',
    '300 mg comprimido revestido',
    '50 mg comprimido revestido XRO', '200 mg XRO', '300 mg XRO', '400 mg XRO'
  ]},
  { name: 'Olanzapina', aliases: ['Zyprexa', 'Zaldiar?', 'Olapine'], presentations: [
    '2,5 mg comprimido revestido', '5 mg comprimido revestido',
    '10 mg comprimido revestido', '5 mg comprimido orodispersível', '10 mg comprimido orodispersível'
  ]},
  { name: 'Aripiprazol', aliases: ['Abilify', 'Aristab', 'Arpilif'], presentations: [
    '10 mg comprimido', '15 mg comprimido', '20 mg comprimido', '30 mg comprimido',
    '300 mg pó liofilizado para suspensão injetável (Maintena)',
    '400 mg pó liofilizado para suspensão injetável (Maintena)'
  ]},
  { name: 'Clozapina', aliases: ['Leponex'], presentations: [
    '25 mg comprimido', '100 mg comprimido'
  ]},
  { name: 'Ziprasidona', aliases: ['Geodon'], presentations: [
    '40 mg cápsula', '80 mg cápsula'
  ]},
  { name: 'Periciazina', aliases: ['Neuleptil'], presentations: [
    '10 mg cápsula', '40 mg/mL solução oral 4%', '10 mg/mL solução oral 1%'
  ]},
  { name: 'Levomepromazina', aliases: ['Neozine'], presentations: [
    '25 mg comprimido', '100 mg comprimido', '40 mg/mL gotas (4%)'
  ]},
  { name: 'Tioridazina', aliases: ['Melleril'], presentations: [
    '25 mg comprimido', '50 mg comprimido', '100 mg comprimido'
  ]},
  { name: 'Lurasidona', aliases: ['Latuda'], presentations: [
    '20 mg comprimido', '40 mg comprimido', '80 mg comprimido'
  ]},

  /* --- Anti-Parkinson e movimentos --- */
  { name: 'Levodopa + benserazida', aliases: ['Prolopa', 'Prolopa BD'], presentations: [
    '100/25 mg comprimido', '200/50 mg comprimido',
    '100/25 mg comprimido dispersível (BD)', '100/25 mg cápsula HBS'
  ]},
  { name: 'Levodopa + carbidopa', aliases: ['Sinemet', 'Cronomet', 'Parkidopa'], presentations: [
    '100/25 mg comprimido', '250/25 mg comprimido', '200/50 mg comprimido CR'
  ]},
  { name: 'Levodopa + carbidopa + entacapona', aliases: ['Stalevo'], presentations: [
    '50/12,5/200 mg comprimido revestido', '75/18,75/200 mg comprimido revestido',
    '100/25/200 mg comprimido revestido', '125/31,25/200 mg comprimido revestido',
    '150/37,5/200 mg comprimido revestido', '200/50/200 mg comprimido revestido'
  ]},
  { name: 'Pramipexol', aliases: ['Sifrol', 'Sifrol ER', 'Stadium'], presentations: [
    '0,125 mg comprimido', '0,25 mg comprimido', '1 mg comprimido',
    '0,375 mg comprimido ER', '0,75 mg comprimido ER', '1,5 mg comprimido ER',
    '3 mg comprimido ER', '4,5 mg comprimido ER'
  ]},
  { name: 'Ropinirol', aliases: ['Requip XL'], presentations: [
    '0,25 mg comprimido', '1 mg comprimido', '2 mg comprimido',
    '5 mg comprimido', '8 mg comprimido', 'comprimidos de liberação prolongada (XL)'
  ]},
  { name: 'Rotigotina', aliases: ['Neupro'], presentations: [
    '2 mg/24h adesivo transdérmico', '4 mg/24h adesivo transdérmico',
    '6 mg/24h adesivo transdérmico', '8 mg/24h adesivo transdérmico'
  ]},
  { name: 'Amantadina', aliases: ['Mantidan'], presentations: [
    '100 mg cápsula'
  ]},
  { name: 'Selegilina', aliases: ['Niar', 'Jumexil'], presentations: [
    '5 mg comprimido', '10 mg comprimido'
  ]},
  { name: 'Rasagilina', aliases: ['Azilect'], presentations: [
    '1 mg comprimido'
  ]},
  { name: 'Entacapona', aliases: ['Comtan'], presentations: [
    '200 mg comprimido revestido'
  ]},
  { name: 'Biperideno', aliases: ['Akineton', 'Cinetol'], presentations: [
    '2 mg comprimido', '4 mg comprimido de liberação prolongada',
    '5 mg/1 mL solução injetável'
  ]},
  { name: 'Triexifenidil', aliases: ['Artane'], presentations: [
    '5 mg comprimido'
  ]},
  { name: 'Safinamida', aliases: ['Xadago'], presentations: ['50 mg comprimido', '100 mg comprimido'] },

  /* --- Demência (anticolinesterásicos / memantina) --- */
  { name: 'Donepezila', aliases: ['Eranz', 'Donila', 'Doneprion'], presentations: [
    '5 mg comprimido revestido', '10 mg comprimido revestido', '23 mg comprimido revestido'
  ]},
  { name: 'Rivastigmina', aliases: ['Exelon', 'Prometax'], presentations: [
    '1,5 mg cápsula', '3 mg cápsula', '4,5 mg cápsula', '6 mg cápsula',
    '4,6 mg/24h adesivo transdérmico', '9,5 mg/24h adesivo transdérmico',
    '13,3 mg/24h adesivo transdérmico', '2 mg/mL solução oral'
  ]},
  { name: 'Galantamina', aliases: ['Reminyl ER'], presentations: [
    '8 mg cápsula de liberação prolongada', '16 mg cápsula de liberação prolongada',
    '24 mg cápsula de liberação prolongada', '4 mg/mL solução oral'
  ]},
  { name: 'Memantina', aliases: ['Ebix', 'Alois', 'Memora'], presentations: [
    '10 mg comprimido revestido', '20 mg comprimido revestido'
  ]},

  /* --- Esclerose múltipla --- */
  { name: 'Interferona beta-1a', aliases: ['Avonex', 'Rebif'], presentations: [
    '30 mcg solução injetável IM (Avonex)', '22 mcg/0,5 mL solução injetável SC (Rebif)',
    '44 mcg/0,5 mL solução injetável SC (Rebif)'
  ]},
  { name: 'Interferona beta-1b', aliases: ['Betaferon', 'Extavia'], presentations: [
    '0,3 mg pó liofilizado para solução injetável SC'
  ]},
  { name: 'Acetato de glatirâmer', aliases: ['Copaxone'], presentations: [
    '20 mg/mL seringa preenchida SC', '40 mg/mL seringa preenchida SC'
  ]},
  { name: 'Fingolimode', aliases: ['Gilenya'], presentations: [
    '0,5 mg cápsula'
  ]},
  { name: 'Teriflunomida', aliases: ['Aubagio'], presentations: [
    '14 mg comprimido revestido'
  ]},
  { name: 'Dimetilfumarato', aliases: ['Tecfidera'], presentations: [
    '120 mg cápsula gastrorresistente', '240 mg cápsula gastrorresistente'
  ]},
  { name: 'Natalizumabe', aliases: ['Tysabri'], presentations: [
    '300 mg/15 mL solução para infusão IV'
  ]},
  { name: 'Ocrelizumabe', aliases: ['Ocrevus'], presentations: [
    '300 mg/10 mL concentrado para solução para infusão IV'
  ]},
  { name: 'Cladribina', aliases: ['Mavenclad'], presentations: ['10 mg comprimido'] },

  /* --- Espasticidade / relaxantes --- */
  { name: 'Baclofeno', aliases: ['Lioresal'], presentations: [
    '10 mg comprimido', '20 mg comprimido', '0,5 mg/mL solução intratecal'
  ]},
  { name: 'Tizanidina', aliases: ['Sirdalud'], presentations: [
    '2 mg comprimido', '4 mg comprimido'
  ]},
  { name: 'Ciclobenzaprina', aliases: ['Miosan', 'Mirtax', 'Benziflex'], presentations: [
    '5 mg comprimido revestido', '10 mg comprimido revestido'
  ]},
  { name: 'Carisoprodol + paracetamol + cafeína + diclofenaco', aliases: ['Tandrilax', 'Mioflex-A', 'Torsilax'], presentations: [
    '125 + 300 + 30 + 50 mg comprimido revestido'
  ]},

  /* --- Vertigem / antieméticos / cinetose --- */
  { name: 'Betaistina', aliases: ['Labirin', 'Vertix'], presentations: [
    '8 mg comprimido', '16 mg comprimido', '24 mg comprimido'
  ]},
  { name: 'Dimenidrinato', aliases: ['Dramin', 'Dramin B6'], presentations: [
    '50 mg comprimido', '100 mg comprimido', '25 mg/5 mL xarope',
    '6,25 mg/mL gotas', '50 mg/mL solução injetável'
  ]},
  { name: 'Meclizina', aliases: ['Meclin'], presentations: ['25 mg comprimido'] },
  { name: 'Prometazina', aliases: ['Fenergan'], presentations: [
    '25 mg comprimido revestido', '25 mg/mL solução injetável (ampola 2 mL)'
  ]},
  { name: 'Ondansetrona', aliases: ['Zofran', 'Vonau', 'Nausedron'], presentations: [
    '4 mg comprimido', '8 mg comprimido', '4 mg comprimido orodispersível',
    '8 mg comprimido orodispersível', '0,8 mg/mL solução oral',
    '2 mg/mL solução injetável (ampola 2 mL)'
  ]},
  { name: 'Metoclopramida', aliases: ['Plasil'], presentations: [
    '10 mg comprimido', '4 mg/mL solução oral (gotas)',
    '5 mg/mL solução injetável (ampola 2 mL)'
  ]},
  { name: 'Bromoprida', aliases: ['Digesan', 'Plamet'], presentations: [
    '10 mg cápsula', '5 mg/mL solução oral (gotas)',
    '5 mg/mL solução injetável'
  ]},

  /* --- Outros neuro --- */
  { name: 'Riluzol', aliases: ['Rilutek'], presentations: ['50 mg comprimido revestido'] },
  { name: 'Edaravona', aliases: ['Radicava'], presentations: ['30 mg/100 mL solução para infusão IV'] },
  { name: 'Tetrabenazina', aliases: ['Xenazine'], presentations: ['25 mg comprimido'] },
  { name: 'Piracetam', aliases: ['Nootropil'], presentations: [
    '800 mg comprimido revestido', '200 mg/mL solução oral',
    '200 mg/mL solução injetável (ampola 5 mL)'
  ]},
  { name: 'Citicolina', aliases: ['Somazina', 'Esevrel'], presentations: [
    '500 mg comprimido revestido', '500 mg/4 mL solução oral',
    '125 mg/mL solução oral', '500 mg/4 mL solução injetável'
  ]},
  { name: 'Ginkgo biloba', aliases: ['Tebonin', 'Tanakan', 'Equitam'], presentations: [
    '40 mg comprimido revestido', '80 mg comprimido revestido', '120 mg comprimido revestido'
  ]},
  { name: 'Vinpocetina', aliases: ['Cavinton', 'Vinpotrop'], presentations: [
    '5 mg comprimido', '10 mg comprimido'
  ]},

  /* =========================  CARDIOVASCULAR  ========================= */

  /* --- IECA --- */
  { name: 'Captopril', aliases: ['Capoten'], presentations: [
    '12,5 mg comprimido', '25 mg comprimido', '50 mg comprimido'
  ]},
  { name: 'Enalapril', aliases: ['Renitec', 'Vasopril'], presentations: [
    '5 mg comprimido', '10 mg comprimido', '20 mg comprimido'
  ]},
  { name: 'Ramipril', aliases: ['Triatec', 'Naprix'], presentations: [
    '2,5 mg comprimido', '5 mg comprimido', '10 mg comprimido'
  ]},
  { name: 'Lisinopril', aliases: ['Zestril', 'Prinivil'], presentations: [
    '5 mg comprimido', '10 mg comprimido', '20 mg comprimido'
  ]},
  { name: 'Perindopril', aliases: ['Coversyl'], presentations: [
    '4 mg comprimido', '5 mg comprimido', '8 mg comprimido', '10 mg comprimido'
  ]},

  /* --- BRA --- */
  { name: 'Losartana potássica', aliases: ['Cozaar', 'Aradois', 'Corus'], presentations: [
    '25 mg comprimido revestido', '50 mg comprimido revestido', '100 mg comprimido revestido'
  ]},
  { name: 'Valsartana', aliases: ['Diovan', 'Tareg'], presentations: [
    '40 mg comprimido revestido', '80 mg comprimido revestido',
    '160 mg comprimido revestido', '320 mg comprimido revestido'
  ]},
  { name: 'Olmesartana', aliases: ['Benicar', 'Olmetec', 'Tensaliv'], presentations: [
    '20 mg comprimido revestido', '40 mg comprimido revestido'
  ]},
  { name: 'Telmisartana', aliases: ['Micardis', 'Pritor'], presentations: [
    '40 mg comprimido', '80 mg comprimido'
  ]},
  { name: 'Candesartana', aliases: ['Atacand', 'Candezar'], presentations: [
    '8 mg comprimido', '16 mg comprimido', '32 mg comprimido'
  ]},
  { name: 'Irbesartana', aliases: ['Avapro'], presentations: [
    '75 mg comprimido', '150 mg comprimido', '300 mg comprimido'
  ]},

  /* --- BCC --- */
  { name: 'Anlodipino', aliases: ['Norvasc', 'Pressat'], presentations: [
    '2,5 mg comprimido', '5 mg comprimido', '10 mg comprimido'
  ]},
  { name: 'Nifedipino', aliases: ['Adalat Oros', 'Adalat Retard'], presentations: [
    '20 mg comprimido retard', '30 mg comprimido OROS',
    '60 mg comprimido OROS', '10 mg cápsula'
  ]},
  { name: 'Lercanidipino', aliases: ['Zanidip'], presentations: [
    '10 mg comprimido revestido', '20 mg comprimido revestido'
  ]},
  { name: 'Manidipino', aliases: ['Manivasc'], presentations: ['10 mg comprimido', '20 mg comprimido'] },
  { name: 'Verapamil', aliases: ['Dilacoron', 'Verapamil retard'], presentations: [
    '40 mg comprimido', '80 mg comprimido', '120 mg comprimido retard',
    '240 mg comprimido retard', '5 mg/2 mL solução injetável'
  ]},
  { name: 'Diltiazem', aliases: ['Cardizem', 'Cardizem CD', 'Cardizem SR', 'Balcor'], presentations: [
    '60 mg comprimido', '90 mg comprimido CD',
    '120 mg cápsula CD', '180 mg cápsula CD', '240 mg cápsula CD', '300 mg cápsula CD'
  ]},

  /* --- Beta-bloqueadores --- */
  { name: 'Propranolol', aliases: ['Inderal', 'Cloridrato de propranolol'], presentations: [
    '10 mg comprimido', '40 mg comprimido', '80 mg comprimido'
  ]},
  { name: 'Atenolol', aliases: ['Atenol', 'Ablok'], presentations: [
    '25 mg comprimido', '50 mg comprimido', '100 mg comprimido'
  ]},
  { name: 'Metoprolol', aliases: ['Seloken Zok', 'Selozok', 'Lopressor'], presentations: [
    '25 mg comprimido', '50 mg comprimido', '100 mg comprimido',
    '25 mg comprimido revestido Zok', '50 mg comprimido revestido Zok',
    '100 mg comprimido revestido Zok'
  ]},
  { name: 'Bisoprolol', aliases: ['Concor', 'Bicor'], presentations: [
    '1,25 mg comprimido', '2,5 mg comprimido',
    '5 mg comprimido', '10 mg comprimido'
  ]},
  { name: 'Carvedilol', aliases: ['Coreg', 'Cardilol', 'Karvil'], presentations: [
    '3,125 mg comprimido', '6,25 mg comprimido',
    '12,5 mg comprimido', '25 mg comprimido'
  ]},
  { name: 'Nebivolol', aliases: ['Nebilet'], presentations: ['5 mg comprimido'] },

  /* --- Diuréticos --- */
  { name: 'Hidroclorotiazida', aliases: ['Clorana', 'Drenol'], presentations: [
    '12,5 mg comprimido', '25 mg comprimido', '50 mg comprimido'
  ]},
  { name: 'Clortalidona', aliases: ['Higroton', 'Clortil'], presentations: [
    '12,5 mg comprimido', '25 mg comprimido', '50 mg comprimido'
  ]},
  { name: 'Indapamida', aliases: ['Natrilix SR', 'Indapen'], presentations: [
    '1,5 mg comprimido revestido SR', '2,5 mg comprimido revestido'
  ]},
  { name: 'Furosemida', aliases: ['Lasix'], presentations: [
    '40 mg comprimido', '10 mg/mL solução injetável (ampola 2 mL)'
  ]},
  { name: 'Espironolactona', aliases: ['Aldactone', 'Diacqua'], presentations: [
    '25 mg comprimido', '50 mg comprimido', '100 mg comprimido'
  ]},
  { name: 'Bumetanida', aliases: ['Burinax'], presentations: ['1 mg comprimido'] },

  /* --- Outros anti-hipertensivos / vasos --- */
  { name: 'Clonidina', aliases: ['Atensina'], presentations: [
    '0,100 mg comprimido', '0,150 mg comprimido', '0,200 mg comprimido'
  ]},
  { name: 'Metildopa', aliases: ['Aldomet'], presentations: [
    '250 mg comprimido', '500 mg comprimido'
  ]},
  { name: 'Hidralazina', aliases: ['Apresolina', 'Nepresol'], presentations: [
    '25 mg comprimido', '50 mg comprimido',
    '20 mg solução injetável (ampola 1 mL)'
  ]},
  { name: 'Doxazosina', aliases: ['Carduran XL'], presentations: [
    '1 mg comprimido', '2 mg comprimido', '4 mg comprimido', '4 mg comprimido XL', '8 mg comprimido XL'
  ]},
  { name: 'Prazosina', aliases: ['Minipress'], presentations: ['1 mg cápsula', '2 mg cápsula', '4 mg cápsula'] },

  /* --- Antiagregantes / anticoagulantes --- */
  { name: 'Ácido acetilsalicílico (AAS)', aliases: ['AAS', 'Aspirina', 'Aspirina prevent', 'Somalgin'], presentations: [
    '100 mg comprimido', '300 mg comprimido', '500 mg comprimido',
    '81 mg comprimido tamponado', '100 mg comprimido revestido'
  ]},
  { name: 'Clopidogrel', aliases: ['Plavix', 'Iscover', 'Plagrel'], presentations: [
    '75 mg comprimido revestido', '300 mg comprimido revestido'
  ]},
  { name: 'Ticagrelor', aliases: ['Brilinta'], presentations: [
    '60 mg comprimido revestido', '90 mg comprimido revestido'
  ]},
  { name: 'Prasugrel', aliases: ['Effient'], presentations: ['10 mg comprimido revestido'] },
  { name: 'Varfarina', aliases: ['Marevan', 'Coumadin'], presentations: [
    '1 mg comprimido', '2 mg comprimido', '2,5 mg comprimido', '5 mg comprimido'
  ]},
  { name: 'Rivaroxabana', aliases: ['Xarelto'], presentations: [
    '10 mg comprimido revestido', '15 mg comprimido revestido', '20 mg comprimido revestido',
    '2,5 mg comprimido revestido'
  ]},
  { name: 'Dabigatrana', aliases: ['Pradaxa'], presentations: [
    '75 mg cápsula', '110 mg cápsula', '150 mg cápsula'
  ]},
  { name: 'Apixabana', aliases: ['Eliquis'], presentations: [
    '2,5 mg comprimido revestido', '5 mg comprimido revestido'
  ]},
  { name: 'Edoxabana', aliases: ['Lixiana'], presentations: [
    '15 mg comprimido', '30 mg comprimido', '60 mg comprimido'
  ]},
  { name: 'Enoxaparina', aliases: ['Clexane', 'Versa'], presentations: [
    '20 mg/0,2 mL seringa preenchida SC', '40 mg/0,4 mL seringa preenchida SC',
    '60 mg/0,6 mL seringa preenchida SC', '80 mg/0,8 mL seringa preenchida SC',
    '100 mg/1 mL seringa preenchida SC'
  ]},

  /* --- Hipolipemiantes --- */
  { name: 'Sinvastatina', aliases: ['Zocor', 'Sinvascor'], presentations: [
    '10 mg comprimido revestido', '20 mg comprimido revestido',
    '40 mg comprimido revestido', '80 mg comprimido revestido'
  ]},
  { name: 'Atorvastatina', aliases: ['Citalor', 'Lipitor', 'Atorbest'], presentations: [
    '10 mg comprimido revestido', '20 mg comprimido revestido',
    '40 mg comprimido revestido', '80 mg comprimido revestido'
  ]},
  { name: 'Rosuvastatina', aliases: ['Crestor', 'Vivacor', 'Rosucor', 'Trezor'], presentations: [
    '5 mg comprimido revestido', '10 mg comprimido revestido',
    '20 mg comprimido revestido', '40 mg comprimido revestido'
  ]},
  { name: 'Pravastatina', aliases: ['Pravacol'], presentations: [
    '10 mg comprimido', '20 mg comprimido', '40 mg comprimido'
  ]},
  { name: 'Pitavastatina', aliases: ['Livazo'], presentations: [
    '1 mg comprimido', '2 mg comprimido', '4 mg comprimido'
  ]},
  { name: 'Ezetimiba', aliases: ['Zetia', 'Ezetrol'], presentations: ['10 mg comprimido'] },
  { name: 'Ezetimiba + sinvastatina', aliases: ['Vytorin', 'Zintrepid'], presentations: [
    '10 + 20 mg comprimido', '10 + 40 mg comprimido'
  ]},
  { name: 'Ciprofibrato', aliases: ['Lipless', 'Lipanon'], presentations: ['100 mg comprimido'] },
  { name: 'Fenofibrato', aliases: ['Lipidil', 'Trolip'], presentations: [
    '160 mg comprimido revestido', '200 mg cápsula', '250 mg cápsula', '145 mg comprimido'
  ]},
  { name: 'Bezafibrato', aliases: ['Cedur retard'], presentations: ['200 mg comprimido', '400 mg retard'] },
  { name: 'Gemfibrozila', aliases: ['Lopid'], presentations: ['600 mg comprimido', '900 mg comprimido'] },
  { name: 'Ácidos graxos ômega-3 (EPA + DHA)', aliases: ['Vitafor ômega', 'Naturetti ômega'], presentations: [
    '1000 mg cápsula gelatinosa', '1500 mg cápsula gelatinosa'
  ]},

  /* =========================  ENDÓCRINO  ========================= */

  /* --- Diabetes orais --- */
  { name: 'Metformina', aliases: ['Glifage', 'Glifage XR', 'Glucoformin'], presentations: [
    '500 mg comprimido', '850 mg comprimido', '1000 mg comprimido',
    '500 mg comprimido XR', '750 mg comprimido XR', '1000 mg comprimido XR'
  ]},
  { name: 'Glibenclamida', aliases: ['Daonil'], presentations: ['5 mg comprimido'] },
  { name: 'Glimepirida', aliases: ['Amaryl', 'Glimepil'], presentations: [
    '1 mg comprimido', '2 mg comprimido', '4 mg comprimido', '6 mg comprimido'
  ]},
  { name: 'Gliclazida', aliases: ['Diamicron MR', 'Azukon'], presentations: [
    '30 mg comprimido MR', '60 mg comprimido MR', '80 mg comprimido'
  ]},
  { name: 'Sitagliptina', aliases: ['Januvia', 'Sintenza'], presentations: [
    '25 mg comprimido revestido', '50 mg comprimido revestido', '100 mg comprimido revestido'
  ]},
  { name: 'Vildagliptina', aliases: ['Galvus'], presentations: ['50 mg comprimido'] },
  { name: 'Linagliptina', aliases: ['Trayenta'], presentations: ['5 mg comprimido revestido'] },
  { name: 'Saxagliptina', aliases: ['Onglyza'], presentations: ['2,5 mg comprimido revestido', '5 mg comprimido revestido'] },
  { name: 'Dapagliflozina', aliases: ['Forxiga'], presentations: [
    '5 mg comprimido revestido', '10 mg comprimido revestido'
  ]},
  { name: 'Empagliflozina', aliases: ['Jardiance'], presentations: [
    '10 mg comprimido revestido', '25 mg comprimido revestido'
  ]},
  { name: 'Canagliflozina', aliases: ['Invokana'], presentations: [
    '100 mg comprimido revestido', '300 mg comprimido revestido'
  ]},
  { name: 'Pioglitazona', aliases: ['Actos', 'Pioglit'], presentations: [
    '15 mg comprimido', '30 mg comprimido', '45 mg comprimido'
  ]},
  { name: 'Acarbose', aliases: ['Glucobay', 'Aglucose'], presentations: [
    '50 mg comprimido', '100 mg comprimido'
  ]},
  { name: 'Repaglinida', aliases: ['Posprand', 'Novonorm'], presentations: [
    '0,5 mg comprimido', '1 mg comprimido', '2 mg comprimido'
  ]},

  /* --- GLP-1 / GIP --- */
  { name: 'Liraglutida', aliases: ['Victoza', 'Saxenda'], presentations: [
    '6 mg/mL solução injetável SC (caneta 3 mL — Victoza)',
    '6 mg/mL solução injetável SC (caneta 3 mL — Saxenda)'
  ]},
  { name: 'Dulaglutida', aliases: ['Trulicity'], presentations: [
    '0,75 mg/0,5 mL caneta SC', '1,5 mg/0,5 mL caneta SC'
  ]},
  { name: 'Semaglutida', aliases: ['Ozempic', 'Wegovy', 'Rybelsus'], presentations: [
    '0,25 mg/dose caneta SC (Ozempic)', '0,5 mg/dose caneta SC (Ozempic)',
    '1 mg/dose caneta SC (Ozempic)', '2 mg/dose caneta SC (Ozempic)',
    '2,4 mg/dose caneta SC (Wegovy)',
    '3 mg comprimido (Rybelsus)', '7 mg comprimido (Rybelsus)', '14 mg comprimido (Rybelsus)'
  ]},
  { name: 'Tirzepatida', aliases: ['Mounjaro'], presentations: [
    '2,5 mg/0,5 mL caneta SC', '5 mg/0,5 mL caneta SC',
    '7,5 mg/0,5 mL caneta SC', '10 mg/0,5 mL caneta SC',
    '12,5 mg/0,5 mL caneta SC', '15 mg/0,5 mL caneta SC'
  ]},

  /* --- Insulinas --- */
  { name: 'Insulina regular', aliases: ['Humulin R', 'Novolin R'], presentations: [
    '100 UI/mL frasco-ampola 10 mL', '100 UI/mL refil 3 mL'
  ]},
  { name: 'Insulina NPH', aliases: ['Humulin N', 'Novolin N'], presentations: [
    '100 UI/mL frasco-ampola 10 mL', '100 UI/mL refil 3 mL'
  ]},
  { name: 'Insulina glargina', aliases: ['Lantus', 'Toujeo', 'Basaglar'], presentations: [
    '100 UI/mL caneta 3 mL (Lantus)', '300 UI/mL caneta 1,5 mL (Toujeo)',
    '100 UI/mL caneta 3 mL (Basaglar)'
  ]},
  { name: 'Insulina detemir', aliases: ['Levemir'], presentations: ['100 UI/mL caneta 3 mL'] },
  { name: 'Insulina degludeca', aliases: ['Tresiba'], presentations: [
    '100 UI/mL caneta 3 mL', '200 UI/mL caneta 3 mL'
  ]},
  { name: 'Insulina lispro', aliases: ['Humalog'], presentations: [
    '100 UI/mL caneta 3 mL', '100 UI/mL frasco-ampola 10 mL'
  ]},
  { name: 'Insulina asparte', aliases: ['NovoRapid', 'Fiasp'], presentations: [
    '100 UI/mL caneta 3 mL', '100 UI/mL frasco-ampola 10 mL'
  ]},
  { name: 'Insulina glulisina', aliases: ['Apidra'], presentations: ['100 UI/mL caneta 3 mL'] },

  /* --- Tireoide --- */
  { name: 'Levotiroxina sódica', aliases: ['Puran T4', 'Synthroid', 'Euthyrox', 'Levoid'], presentations: [
    '12,5 mcg comprimido', '25 mcg comprimido', '37,5 mcg comprimido',
    '50 mcg comprimido', '62,5 mcg comprimido', '75 mcg comprimido',
    '88 mcg comprimido', '100 mcg comprimido', '112 mcg comprimido',
    '125 mcg comprimido', '137 mcg comprimido', '150 mcg comprimido',
    '175 mcg comprimido', '200 mcg comprimido'
  ]},
  { name: 'Liotironina', aliases: ['Cynomel'], presentations: ['25 mcg comprimido'] },
  { name: 'Metimazol', aliases: ['Tapazol'], presentations: ['5 mg comprimido', '10 mg comprimido'] },
  { name: 'Propiltiouracil', aliases: ['Propilracil'], presentations: ['100 mg comprimido'] },

  /* =========================  GASTROINTESTINAL  ========================= */
  { name: 'Omeprazol', aliases: ['Losec', 'Peprazol', 'Gastrium'], presentations: [
    '10 mg cápsula', '20 mg cápsula', '40 mg cápsula',
    '40 mg pó liofilizado para solução injetável'
  ]},
  { name: 'Pantoprazol', aliases: ['Pantozol', 'Pantogastric'], presentations: [
    '20 mg comprimido revestido', '40 mg comprimido revestido',
    '40 mg pó liofilizado injetável'
  ]},
  { name: 'Esomeprazol', aliases: ['Nexium'], presentations: [
    '20 mg comprimido revestido', '40 mg comprimido revestido', '40 mg pó liofilizado injetável'
  ]},
  { name: 'Lansoprazol', aliases: ['Prazol', 'Ogastro'], presentations: ['15 mg cápsula', '30 mg cápsula'] },
  { name: 'Rabeprazol', aliases: ['Pariet'], presentations: ['10 mg comprimido revestido', '20 mg comprimido revestido'] },
  { name: 'Famotidina', aliases: ['Famox', 'Famodine'], presentations: ['20 mg comprimido', '40 mg comprimido'] },
  { name: 'Hidróxido de alumínio + magnésio', aliases: ['Mylanta Plus', 'Maalox plus'], presentations: [
    'suspensão oral', 'comprimido mastigável'
  ]},
  { name: 'Hioscina (butilescopolamina)', aliases: ['Buscopan', 'Buscofem'], presentations: [
    '10 mg drágea', '20 mg/mL solução injetável (ampola 1 mL)',
    '6,67 mg/mL solução oral (gotas)'
  ]},
  { name: 'Hioscina + dipirona', aliases: ['Buscopan composto', 'Atroveran composto'], presentations: [
    '10 + 250 mg drágea', '4 + 500 mg/mL solução injetável (ampola 5 mL)'
  ]},
  { name: 'Lactulose', aliases: ['Lactulona', 'Pentalac'], presentations: [
    '667 mg/mL xarope', '10 g/15 mL xarope'
  ]},
  { name: 'Picossulfato de sódio', aliases: ['Guttalax'], presentations: ['7,5 mg/mL gotas'] },
  { name: 'Bisacodil', aliases: ['Dulcolax'], presentations: ['5 mg drágea'] },
  { name: 'Polietilenoglicol', aliases: ['Muvinor', 'Lacto-purga MAX'], presentations: [
    '17 g sachê pó para solução oral'
  ]},
  { name: 'Loperamida', aliases: ['Imosec', 'Diasec'], presentations: ['2 mg comprimido', '2 mg cápsula'] },
  { name: 'Simeticona', aliases: ['Luftal', 'Flatoril'], presentations: [
    '40 mg comprimido', '75 mg/mL gotas'
  ]},

  /* =========================  ANALGESIA / AINE / OPIOIDES  ========================= */
  { name: 'Paracetamol', aliases: ['Tylenol', 'Vick Pyrena'], presentations: [
    '500 mg comprimido', '750 mg comprimido', '200 mg/mL solução oral (gotas)',
    '32 mg/mL solução oral (xarope)'
  ]},
  { name: 'Dipirona sódica', aliases: ['Novalgina', 'Anador', 'Magnopyrol'], presentations: [
    '500 mg comprimido', '1000 mg comprimido', '500 mg/mL solução oral (gotas)',
    '50 mg/mL solução oral', '500 mg/mL solução injetável (ampola 2 mL/5 mL)'
  ]},
  { name: 'Ibuprofeno', aliases: ['Alivium', 'Advil', 'Motrin'], presentations: [
    '200 mg cápsula gel', '300 mg comprimido revestido',
    '400 mg comprimido revestido', '600 mg comprimido revestido',
    '50 mg/mL suspensão oral', '100 mg/mL suspensão oral'
  ]},
  { name: 'Naproxeno', aliases: ['Flanax', 'Naprosyn'], presentations: [
    '250 mg comprimido', '500 mg comprimido', '550 mg comprimido revestido'
  ]},
  { name: 'Diclofenaco sódico', aliases: ['Voltaren', 'Cataflan retard'], presentations: [
    '50 mg comprimido revestido', '75 mg comprimido revestido SR',
    '100 mg comprimido SR',
    '25 mg/mL solução injetável (ampola 3 mL)'
  ]},
  { name: 'Diclofenaco potássico', aliases: ['Cataflam'], presentations: [
    '50 mg comprimido revestido', '15 mg/mL gotas'
  ]},
  { name: 'Cetoprofeno', aliases: ['Profenid', 'Bi-profenid'], presentations: [
    '50 mg cápsula', '100 mg comprimido revestido',
    '150 mg comprimido revestido bi-profenid', '20 mg/mL gotas',
    '50 mg/mL solução injetável IV/IM (ampola 2 mL)', '100 mg pó liofilizado injetável'
  ]},
  { name: 'Cetorolaco', aliases: ['Toragesic', 'Toradol'], presentations: [
    '10 mg comprimido sublingual', '30 mg/mL solução injetável (ampola 1 mL)'
  ]},
  { name: 'Nimesulida', aliases: ['Nisulid', 'Scaflam'], presentations: [
    '100 mg comprimido', '50 mg/mL gotas', '100 mg pó para suspensão oral (sachê)'
  ]},
  { name: 'Meloxicam', aliases: ['Movatec', 'Meloxiart'], presentations: [
    '7,5 mg comprimido', '15 mg comprimido', '15 mg/1,5 mL solução injetável'
  ]},
  { name: 'Etoricoxibe', aliases: ['Arcoxia'], presentations: [
    '60 mg comprimido revestido', '90 mg comprimido revestido', '120 mg comprimido revestido'
  ]},
  { name: 'Celecoxibe', aliases: ['Celebra'], presentations: ['100 mg cápsula', '200 mg cápsula'] },
  { name: 'Tramadol', aliases: ['Tramal'], presentations: [
    '50 mg cápsula', '100 mg comprimido SR',
    '100 mg/mL gotas', '50 mg/mL solução injetável (ampola 1 mL/2 mL)'
  ]},
  { name: 'Tramadol + paracetamol', aliases: ['Ultracet'], presentations: [
    '37,5 + 325 mg comprimido revestido'
  ]},
  { name: 'Codeína', aliases: ['Codein', 'Tylex'], presentations: [
    '30 mg comprimido', '60 mg comprimido',
    '30 mg + 500 mg paracetamol comprimido (Tylex 30/500)'
  ]},
  { name: 'Morfina', aliases: ['Dimorf', 'MS Long'], presentations: [
    '10 mg comprimido', '30 mg comprimido', '10 mg/mL solução oral',
    '10 mg/mL solução injetável (ampola 1 mL)',
    '30 mg cápsula MS Long', '60 mg cápsula MS Long', '100 mg cápsula MS Long'
  ]},
  { name: 'Oxicodona', aliases: ['Oxycontin'], presentations: [
    '10 mg comprimido CR', '20 mg comprimido CR', '40 mg comprimido CR'
  ]},
  { name: 'Fentanil', aliases: ['Durogesic'], presentations: [
    '12 mcg/h adesivo transdérmico', '25 mcg/h adesivo transdérmico',
    '50 mcg/h adesivo transdérmico', '75 mcg/h adesivo transdérmico',
    '100 mcg/h adesivo transdérmico', '50 mcg/mL solução injetável'
  ]},
  { name: 'Metadona', aliases: ['Mytedom'], presentations: [
    '5 mg comprimido', '10 mg comprimido', '10 mg/mL solução injetável'
  ]},
  { name: 'Capsaicina', aliases: ['Moment', 'Capsidor'], presentations: [
    '0,025% creme', '0,075% creme', '8% adesivo transdérmico (Qutenza)'
  ]},

  /* =========================  ANTIBIÓTICOS  ========================= */
  { name: 'Amoxicilina', aliases: ['Amoxil', 'Hiconcil'], presentations: [
    '500 mg cápsula', '875 mg comprimido revestido',
    '50 mg/mL suspensão oral 250 mg/5 mL', '500 mg/5 mL suspensão oral'
  ]},
  { name: 'Amoxicilina + clavulanato', aliases: ['Clavulin', 'Sigma clav'], presentations: [
    '500 + 125 mg comprimido revestido',
    '875 + 125 mg comprimido revestido',
    '250 + 62,5 mg/5 mL suspensão oral', '400 + 57 mg/5 mL suspensão oral',
    '600 mg pó para solução injetável', '1,2 g pó para solução injetável'
  ]},
  { name: 'Cefalexina', aliases: ['Keflex'], presentations: [
    '500 mg cápsula', '500 mg/5 mL suspensão oral'
  ]},
  { name: 'Cefuroxima', aliases: ['Zinacef', 'Zinnat'], presentations: [
    '250 mg comprimido revestido', '500 mg comprimido revestido',
    '250 mg/5 mL suspensão oral', '750 mg pó injetável', '1,5 g pó injetável'
  ]},
  { name: 'Ceftriaxona', aliases: ['Rocefin'], presentations: [
    '500 mg pó injetável', '1 g pó injetável', '2 g pó injetável'
  ]},
  { name: 'Cefepime', aliases: ['Maxcef'], presentations: ['1 g pó injetável', '2 g pó injetável'] },
  { name: 'Azitromicina', aliases: ['Zitromax', 'Astro', 'Zitrofar'], presentations: [
    '500 mg comprimido revestido',
    '40 mg/mL suspensão oral 200 mg/5 mL',
    '500 mg pó liofilizado para solução injetável'
  ]},
  { name: 'Claritromicina', aliases: ['Klaricid', 'Clamicin'], presentations: [
    '250 mg comprimido revestido', '500 mg comprimido revestido',
    '500 mg comprimido UD',
    '50 mg/mL suspensão oral'
  ]},
  { name: 'Eritromicina', aliases: ['Pantomicina'], presentations: [
    '500 mg comprimido revestido', '50 mg/mL suspensão oral'
  ]},
  { name: 'Ciprofloxacino', aliases: ['Cipro', 'Floxan', 'Ciflox'], presentations: [
    '250 mg comprimido revestido', '500 mg comprimido revestido', '750 mg comprimido revestido',
    '2 mg/mL solução para infusão IV (frasco 100 mL)', '2 mg/mL solução para infusão IV (frasco 200 mL)'
  ]},
  { name: 'Levofloxacino', aliases: ['Levaquin', 'Tavanic'], presentations: [
    '250 mg comprimido revestido', '500 mg comprimido revestido', '750 mg comprimido revestido',
    '5 mg/mL solução para infusão IV'
  ]},
  { name: 'Moxifloxacino', aliases: ['Avalox'], presentations: [
    '400 mg comprimido revestido', '400 mg/250 mL solução para infusão IV'
  ]},
  { name: 'Norfloxacino', aliases: ['Floxacin'], presentations: ['400 mg comprimido revestido'] },
  { name: 'Sulfametoxazol + trimetoprima', aliases: ['Bactrim', 'Bactrim F'], presentations: [
    '400 + 80 mg comprimido', '800 + 160 mg comprimido (F)',
    '40 + 8 mg/mL suspensão oral', '400 + 80 mg/5 mL solução injetável'
  ]},
  { name: 'Doxiciclina', aliases: ['Vibramicina'], presentations: [
    '100 mg comprimido revestido', '100 mg cápsula'
  ]},
  { name: 'Metronidazol', aliases: ['Flagyl'], presentations: [
    '250 mg comprimido', '400 mg comprimido', '40 mg/mL suspensão oral',
    '5 mg/mL solução para infusão IV (frasco 100 mL)'
  ]},
  { name: 'Nistatina', aliases: ['Micostatin'], presentations: [
    '100.000 UI/mL suspensão oral'
  ]},
  { name: 'Fluconazol', aliases: ['Zoltec', 'Florcoral'], presentations: [
    '100 mg cápsula', '150 mg cápsula', '2 mg/mL solução para infusão IV'
  ]},

  /* =========================  RESPIRATÓRIO / ALERGIA  ========================= */
  { name: 'Salbutamol', aliases: ['Aerolin'], presentations: [
    '100 mcg/dose aerossol oral', '5 mg/mL solução para nebulização',
    '2 mg/5 mL xarope'
  ]},
  { name: 'Formoterol + budesonida', aliases: ['Symbicort'], presentations: [
    '6 + 100 mcg/dose pó inalatório', '6 + 200 mcg/dose pó inalatório', '12 + 400 mcg/dose'
  ]},
  { name: 'Salmeterol + fluticasona', aliases: ['Seretide'], presentations: [
    '50 + 100 mcg/dose Diskus', '50 + 250 mcg/dose Diskus', '50 + 500 mcg/dose Diskus',
    '25 + 50 mcg/dose aerossol', '25 + 125 mcg/dose aerossol', '25 + 250 mcg/dose aerossol'
  ]},
  { name: 'Brometo de tiotrópio', aliases: ['Spiriva'], presentations: [
    '18 mcg/dose pó inalatório (HandiHaler)', '2,5 mcg/dose Respimat'
  ]},
  { name: 'Brometo de ipratrópio', aliases: ['Atrovent'], presentations: [
    '0,25 mg/mL gotas para nebulização', '20 mcg/dose aerossol oral'
  ]},
  { name: 'Beclometasona', aliases: ['Clenil', 'Beclosol'], presentations: [
    '50 mcg/dose aerossol oral', '250 mcg/dose aerossol oral', '400 mcg cápsula'
  ]},
  { name: 'Budesonida', aliases: ['Pulmicort', 'Busonid'], presentations: [
    '0,25 mg/mL suspensão para nebulização', '0,5 mg/mL suspensão para nebulização',
    '100 mcg/dose pó inalatório', '200 mcg/dose pó inalatório'
  ]},
  { name: 'Montelucaste', aliases: ['Singulair', 'Montelair'], presentations: [
    '4 mg comprimido mastigável', '5 mg comprimido mastigável', '10 mg comprimido revestido'
  ]},
  { name: 'Loratadina', aliases: ['Claritin'], presentations: [
    '10 mg comprimido', '1 mg/mL xarope'
  ]},
  { name: 'Desloratadina', aliases: ['Desalex'], presentations: [
    '5 mg comprimido revestido', '0,5 mg/mL xarope'
  ]},
  { name: 'Cetirizina', aliases: ['Zyrtec'], presentations: [
    '10 mg comprimido revestido', '1 mg/mL solução oral'
  ]},
  { name: 'Levocetirizina', aliases: ['Zyxem'], presentations: [
    '5 mg comprimido revestido', '0,5 mg/mL solução oral'
  ]},
  { name: 'Fexofenadina', aliases: ['Allegra'], presentations: [
    '60 mg comprimido revestido', '120 mg comprimido revestido', '180 mg comprimido revestido',
    '6 mg/mL suspensão oral'
  ]},

  /* =========================  CORTICOIDES  ========================= */
  { name: 'Prednisona', aliases: ['Meticorten'], presentations: [
    '5 mg comprimido', '20 mg comprimido', '50 mg comprimido', '40 mg/mL solução oral'
  ]},
  { name: 'Prednisolona', aliases: ['Predsim'], presentations: [
    '5 mg comprimido', '20 mg comprimido', '3 mg/mL solução oral'
  ]},
  { name: 'Dexametasona', aliases: ['Decadron'], presentations: [
    '0,5 mg comprimido', '4 mg comprimido', '0,1 mg/mL elixir',
    '4 mg/mL solução injetável (ampola 2,5 mL)'
  ]},
  { name: 'Metilprednisolona', aliases: ['Solu-Medrol', 'Depo-Medrol'], presentations: [
    '4 mg comprimido', '125 mg pó injetável', '500 mg pó injetável', '1 g pó injetável',
    '40 mg/mL suspensão injetável depo'
  ]},
  { name: 'Hidrocortisona', aliases: ['Solu-Cortef'], presentations: [
    '100 mg pó injetável', '500 mg pó injetável'
  ]},

  /* =========================  UROLOGIA / PRÓSTATA  ========================= */
  { name: 'Tansulosina', aliases: ['Secotex'], presentations: ['0,4 mg cápsula de liberação prolongada'] },
  { name: 'Alfuzosina', aliases: ['Xatral OD'], presentations: ['10 mg comprimido OD'] },
  { name: 'Dutasterida', aliases: ['Avodart'], presentations: ['0,5 mg cápsula gelatinosa'] },
  { name: 'Finasterida', aliases: ['Proscar', 'Propecia'], presentations: ['1 mg comprimido', '5 mg comprimido'] },
  { name: 'Sildenafila', aliases: ['Viagra'], presentations: ['25 mg comprimido', '50 mg comprimido', '100 mg comprimido'] },
  { name: 'Tadalafila', aliases: ['Cialis'], presentations: ['2,5 mg comprimido', '5 mg comprimido', '10 mg comprimido', '20 mg comprimido'] },
  { name: 'Solifenacina', aliases: ['Vesicare'], presentations: ['5 mg comprimido revestido', '10 mg comprimido revestido'] },
  { name: 'Oxibutinina', aliases: ['Retemic'], presentations: ['5 mg comprimido', '10 mg comprimido OXR'] },
  { name: 'Mirabegrona', aliases: ['Betmiga'], presentations: ['25 mg comprimido', '50 mg comprimido'] },

  /* =========================  GINECO  ========================= */
  { name: 'Estradiol', aliases: ['Estreva', 'Estrofem'], presentations: [
    '1 mg comprimido', '2 mg comprimido', '0,06% gel transdérmico'
  ]},
  { name: 'Tibolona', aliases: ['Livial'], presentations: ['2,5 mg comprimido'] },
  { name: 'Acetato de medroxiprogesterona', aliases: ['Depo-Provera', 'Provera'], presentations: [
    '5 mg comprimido', '10 mg comprimido', '150 mg/mL suspensão injetável'
  ]},

  /* =========================  VITAMINAS / SUPLEMENTOS  ========================= */
  { name: 'Vitamina D3 (colecalciferol)', aliases: ['Addera D3', 'Depura'], presentations: [
    '1.000 UI comprimido', '2.000 UI comprimido', '7.000 UI comprimido',
    '50.000 UI comprimido', '200 UI/gota solução oral'
  ]},
  { name: 'Vitamina B12 (cianocobalamina)', aliases: ['Cobavital'], presentations: [
    '5.000 mcg/mL solução injetável', '500 mcg comprimido'
  ]},
  { name: 'Ácido fólico', aliases: ['Endofolin', 'Folacin'], presentations: ['5 mg comprimido', '0,2 mg/mL solução oral'] },
  { name: 'Vitamina B1 (tiamina)', aliases: ['Benerva'], presentations: ['100 mg comprimido', '300 mg comprimido'] },
  { name: 'Vitamina B6 (piridoxina)', aliases: ['Vitabe'], presentations: ['50 mg comprimido'] },
  { name: 'Complexo B', aliases: ['Citoneurin'], presentations: [
    'comprimido revestido (B1+B6+B12)', 'solução injetável (Citoneurin 5000 ampola)'
  ]},
  { name: 'Carbonato de cálcio + vitamina D3', aliases: ['Caltrate D3', 'Os-Cal'], presentations: [
    '600 mg + 400 UI comprimido', '500 mg + 800 UI comprimido'
  ]},
  { name: 'Sulfato ferroso', aliases: ['Noripurum oral', 'Sulfato ferroso 40 mg'], presentations: [
    '40 mg comprimido', '125 mg/5 mL xarope', '25 mg/mL solução oral'
  ]},
  { name: 'Coenzima Q10', aliases: ['Ubiquinona'], presentations: ['30 mg cápsula', '50 mg cápsula', '100 mg cápsula'] },

  /* =========================  OFTALMOLÓGICOS de uso neuro  ========================= */
  { name: 'Latanoprosta', aliases: ['Xalatan'], presentations: ['0,005% colírio (frasco 2,5 mL)'] },
  { name: 'Timolol', aliases: ['Timoptol'], presentations: ['0,25% colírio', '0,5% colírio'] },

  /* =========================  ALCOOLISMO / CESSAÇÃO  ========================= */
  { name: 'Naltrexona', aliases: ['Revia', 'Vivitrol'], presentations: ['50 mg comprimido revestido'] },
  { name: 'Acamprosato', aliases: ['Campral'], presentations: ['333 mg comprimido revestido gastrorresistente'] },
  { name: 'Vareniclina', aliases: ['Champix'], presentations: ['0,5 mg comprimido revestido', '1 mg comprimido revestido'] },

  /* =========================  REUMATO/IMUNO selecionados  ========================= */
  { name: 'Metotrexato', aliases: ['Tecnomet', 'Methotrexate'], presentations: [
    '2,5 mg comprimido', '25 mg/mL solução injetável (ampola 2 mL)',
    '50 mg/mL solução injetável (frasco)', 'caneta SC pré-cheia (Metoject)'
  ]},
  { name: 'Hidroxicloroquina', aliases: ['Plaquinol', 'Reuquinol'], presentations: ['400 mg comprimido revestido'] },
  { name: 'Leflunomida', aliases: ['Arava'], presentations: ['20 mg comprimido revestido'] },
  { name: 'Sulfasalazina', aliases: ['Azulfin'], presentations: ['500 mg comprimido revestido'] },
  { name: 'Colchicina', aliases: ['Colchicin'], presentations: ['0,5 mg comprimido', '1 mg comprimido'] },
  { name: 'Alopurinol', aliases: ['Zyloric'], presentations: ['100 mg comprimido', '300 mg comprimido'] },

  /* =========================  PSIQUIATRIA — outros  ========================= */
  { name: 'Lítio (carbonato)', aliases: ['Carbolitium', 'Carbolitium CR'], presentations: [
    '300 mg comprimido', '450 mg comprimido CR'
  ]},
  { name: 'Metilfenidato', aliases: ['Ritalina', 'Ritalina LA', 'Concerta'], presentations: [
    '10 mg comprimido', '10 mg cápsula LA', '20 mg cápsula LA',
    '30 mg cápsula LA', '40 mg cápsula LA',
    '18 mg comprimido OROS (Concerta)', '36 mg comprimido OROS', '54 mg comprimido OROS'
  ]},
  { name: 'Lisdexanfetamina', aliases: ['Venvanse'], presentations: [
    '30 mg cápsula', '50 mg cápsula', '70 mg cápsula'
  ]},
  { name: 'Atomoxetina', aliases: ['Strattera'], presentations: [
    '10 mg cápsula', '18 mg cápsula', '25 mg cápsula', '40 mg cápsula',
    '60 mg cápsula', '80 mg cápsula'
  ]},

  /* =========================  TÓPICOS / DIVERSOS úteis em prescrição neuro/clinica  ========================= */
  { name: 'Lidocaína', aliases: ['Xylocaína', 'Versatis'], presentations: [
    '5% adesivo dérmico (Versatis)', '2% gel', '2% spray',
    '1% solução injetável', '2% solução injetável'
  ]},
  { name: 'Diclofenaco gel tópico', aliases: ['Voltaren Emulgel', 'Cataflam Pro'], presentations: [
    '10 mg/g gel (1%)', '23,2 mg/g gel'
  ]},
  { name: 'Cetoconazol', aliases: ['Nizoral'], presentations: [
    '200 mg comprimido', '2% xampu', '2% creme dérmico'
  ]},
];

/* Mapa rápido por nome em minúsculas (e por alias) → entry */
window.MED_INDEX = (() => {
  const map = new Map();
  for (const m of window.MEDICATIONS) {
    map.set(m.name.toLowerCase(), m);
    for (const a of (m.aliases || [])) map.set(a.toLowerCase(), m);
  }
  return map;
})();
