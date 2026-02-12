 const signs = [
      {name:'Capricorn', start:[12,22], end:[1,19], short:'Cap'},
      {name:'Aquarius', start:[1,20], end:[2,18], short:'Aq'},
      {name:'Pisces', start:[2,19], end:[3,20], short:'Pi'},
      {name:'Aries', start:[3,21], end:[4,19], short:'Ar'},
      {name:'Taurus', start:[4,20], end:[5,20], short:'Ta'},
      {name:'Gemini', start:[5,21], end:[6,20], short:'Ge'},
      {name:'Cancer', start:[6,21], end:[7,22], short:'Ca'},
      {name:'Leo', start:[7,23], end:[8,22], short:'Le'},
      {name:'Virgo', start:[8,23], end:[9,22], short:'Vi'},
      {name:'Libra', start:[9,23], end:[10,22], short:'Li'},
      {name:'Scorpio', start:[10,23], end:[11,21], short:'Sc'},
      {name:'Sagittarius', start:[11,22], end:[12,21], short:'Sg'}
    ];


    const readings = {
      'Aries': 'Bold, energetic and a natural leader. Try to channel energy into creative projects and avoid impulsive choices.',
      'Taurus': 'Grounded and patient. You value comfort and loyalty. Build long-term plans and reward yourself for  progress.',
      'Gemini': 'Curious and quick-witted. Communication is your superpower — use it to learn and connect widely.',
      'Cancer': 'Sensitive and nurturing. Home and close friends mean a lot; practice setting gentle boundaries.',
      'Leo': 'Confident and generous. Your charisma opens doors — lead, but also make space for others to shine.',
      'Virgo': 'Practical and detail-oriented. Organize systems to reduce friction and remember to rest.',
      'Libra': 'Diplomatic and fair-minded. Seek balance between heart and logic; partnerships thrive under your care.',
      'Scorpio': 'Intense and perceptive. Transformations suit you — embrace honesty and depth.',
      'Sagittarius': 'Adventurous and optimistic. Stretch your horizons but keep a thread of stability.',
      'Capricorn': 'Ambitious and disciplined. Steady progress and realistic timelines reward you well.',
      'Aquarius': 'Innovative and community-minded. You see future possibilities — collaborate and prototype.',
      'Pisces': 'Imaginative and empathetic. Creative work nourishes you; keep boundaries clear to protect your energy.'
    };
    const form = document.getElementById('astroForm');
    form.addEventListener('submit',(event)=>{
        event.preventDefault();
        // console.log("submitted");
        const Name = document.getElementById('first').value;
        const surName = document.getElementById('last').value;
        const day = Number(document.getElementById('day').value);
        const year =Number(document.getElementById('year').value);
        const month = Number(document.getElementById('month').value);


        const result = document.getElementById('result');
        const firstmassage = `hello ${Name} ${surName}`;
        const secondmassage = `Your Zodiac sign is ${signs[month-1]}.`;
        const thirdmassage = `compliment is ${readings[day-1]}.`;
        result.innerText = `${firstmassage}, ${secondmassage}, ${thirdmassage}`;
    })











    // function getSign(day, month){
    //   // month: 1-12
    //   for(const s of signs){
    //     const [sm,sd] = s.start;
    //     const [em,ed] = s.end;
    //     if(sm === month && day >= sd) return s.name;
    //     if(em === month && day <= ed) return s.name;
    //   }
    //   // fallback (should not happen)
    //   return 'Unknown';
    // }

    // function calculateAge(d, m, y){
    //   const now = new Date();
    //   const birth = new Date(y, m-1, d);
    //   let age = now.getFullYear() - birth.getFullYear();
    //   const mth = now.getMonth() - birth.getMonth();
    //   if(mth < 0 || (mth === 0 && now.getDate() < birth.getDate())) age--;
    //   return age;
    // }

    // function randomHint(sign){
    //   const hints = {
    //     'Aries':["Try a short sprint workout today","A bright color boosts your presence"],
    //     'Taurus':["Carry something wooden for stability","A slow-cooked meal brings calm"],
    //     'Gemini':["Call someone you haven't spoken to","Write a short note to clear your mind"],
    //     'Cancer':["Tidy a corner of your home","Cook something comforting"],
    //     'Leo':["Volunteer to lead a small group","Wear a statement accessory"],
    //     'Virgo':["Plan tomorrow the night before","Declutter one small drawer"],
    //     'Libra':["Bring flowers to your workspace","Make time for a friendly chat"],
    //     'Scorpio':["Journal about a recent change","Listen more — ask one great question"],
    //     'Sagittarius':["Explore a local trail","Read for 20 minutes on travel"],
    //     'Capricorn':["Set a 30-minute focused work block","Review your long-term goal list"],
    //     'Aquarius':["Sketch an out-there idea","Share a helpful resource online"],
    //     'Pisces':["Spend 10 minutes daydreaming with music","Make a small creative experiment"]
    //   };
    //   const arr = hints[sign] || ["Try something kind to yourself"];
    //   return arr[Math.floor(Math.random()*arr.length)];
    // }

    // function formatFullName(f,l){
    //   if(!l) return f.trim();
    //   return (f+' '+l).trim();
    // }

    // // DOM
    // const readBtn = document.getElementById('readBtn');
    // const resetBtn = document.getElementById('resetBtn');
    // const copyBtn = document.getElementById('copyBtn');
    // const downloadBtn = document.getElementById('downloadBtn');

    // readBtn.addEventListener('click', ()=>{
    //   const f = document.getElementById('first').value.trim();
    //   const l = document.getElementById('last').value.trim();
    //   const d = parseInt(document.getElementById('day').value,10);
    //   const m = parseInt(document.getElementById('month').value,10);
    //   const y = parseInt(document.getElementById('year').value,10);

    //   if(!f) return alert('Please enter a first name');
    //   if(!d || !m || !y) return alert('Please enter a valid date');
    //   if(d<1||d>31) return alert('Day must be 1-31');
    //   if(m<1||m>12) return alert('Month must be 1-12');

    //   const full = formatFullName(f,l);
    //   const age = calculateAge(d,m,y);
    //   const sign = getSign(d,m);
    //   const reading = readings[sign] || 'Curious and unique — your path is yours to design.';
    //   const luck = randomHint(sign);

    //   // update UI
    //   document.getElementById('fullname').textContent = full;
    //   document.getElementById('basicInfo').textContent = `${d}/${m}/${y} — Age ${age} — ${sign}`;
    //   document.getElementById('readingText').innerHTML = `<strong>${sign} — Personality snapshot</strong><br>${reading} <br><br><em>Quick tip:</em> ${luck}`;
    //   document.getElementById('statAge').textContent = age>=0?age:'—';
    //   document.getElementById('statSign').textContent = sign;
    //   document.getElementById('statLucky').textContent = luck.slice(0,18)+'…';

    //   // update icon letter
    //   const icon = document.querySelector('.sign-icon');
    //   icon.textContent = sign.charAt(0);

    //   // show sparkle animation briefly (just tweak opacity)
    //   // save state if you want localStorage later
    // });

    // resetBtn.addEventListener('click', ()=>{
    //   document.getElementById('astroForm').reset();
    //   document.getElementById('fullname').textContent = 'Your Name';
    //   document.getElementById('basicInfo').textContent = 'DOB — Age — Sun sign';
    //   document.getElementById('readingText').textContent = 'Fill the form and press Get Reading — your instant sun-sign reading will appear here.';
    //   document.getElementById('statAge').textContent = '—';
    //   document.getElementById('statSign').textContent = '—';
    //   document.getElementById('statLucky').textContent = '—';
    // });

    // copyBtn.addEventListener('click', async ()=>{
    //   const full = document.getElementById('fullname').textContent;
    //   const info = document.getElementById('basicInfo').textContent;
    //   const text = `${full}\n${info}\n\n${document.getElementById('readingText').innerText}`;
    //   try{
    //     await navigator.clipboard.writeText(text);
    //     const el = document.getElementById('copied');
    //     el.style.display = 'block';
    //     setTimeout(()=>el.style.display='none',1600);
    //   }catch(e){
    //     alert('Unable to copy.');
    //   }
    // });

    // downloadBtn.addEventListener('click', ()=>{
    //   const full = document.getElementById('fullname').textContent.replace(/\s+/g,'_');
    //   const info = document.getElementById('basicInfo').textContent;
    //   const body = document.getElementById('readingText').innerText;
    //   const blob = new Blob([full+'\n'+info+'\n\n'+body],{type:'text/plain'});
    //   const url = URL.createObjectURL(blob);
    //   const a = document.createElement('a');
    //   a.href = url; a.download = `${full}_stella_reading.txt`;
    //   document.body.appendChild(a); a.click(); a.remove();
    //   URL.revokeObjectURL(url);
    // });