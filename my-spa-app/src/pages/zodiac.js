import React from 'react';
import main from '../assets/logo1.png';
import pirveli from '../assets/aries1.png';
import meore from '../assets/taurus1.png';
import mesame from '../assets/gemini1.png';
import meotxe from '../assets/cancer1.png';
import mexute from '../assets/leo1.png';
import meekvse from '../assets/virgo1.png';
import meshvide from '../assets/libra1.png';
import merve from '../assets/skorpio1.png';
import mecxre from '../assets/sagitta1.png';
import meate from '../assets/capricorn1.png';
import metertmete from '../assets/aquarius1.png';
import metormete from '../assets/pisces1.png';
import './Pages.css';
import { motion } from 'framer-motion';

const About = () => {
  const zodiacSigns = [
    { src: pirveli, sign: 'ვერძი (მარტი 21-აპრილი 19)', text: 'ვერძი ზოდიაქოს პირველი ნიშანია, ამიტომ გასაკვირი არ არის, რომ ეს შინაური ცხოველები ლიდერებად იბადებიან. მათ უყვართ მოქმედება და მღელვარება. ისინი ამბიციურები და გაბედულები არიან. მათ სურთ რომ იყვნენ ბოსები და იყვნენ პირველები. მარსით მართული ძაღლები დამოუკიდებელნი და მოძრავნი არიან. მათ შეუძლება დაჟინებით მოგთხოვონ გასეირნება . მათ აქვთ საკუთარი გონება და სულაც არ მოდიან დაძახებისას , თუ მას არ სურს. დადებითი მხარე ისაა, რომ მათ აქვთ დიდი გული და მოსიყვარულე სული, რომელიც დაუძლეველი და გადამდებია.' },
    { src: meore, sign: 'კურო (აპრილი 20-მაისი 20)', text: 'კურო შეგიძლიათ ერთი სიტყვით შეაჯამოთ: მყუდრო! გაზაფხულზე დაბადებულები, როცა მიწა აყვავებულია და მზე ათბობს. ისინი მიწიერები და ბუნებრივები არიან. ისინი ასევე პრაქტიკულები, სანდო და შრომისმოყვარეები არიან ბუნებისა და სილამაზის ღრმა სიყვარულით. კურო ძაღლების შეუძლიათ იყვნენ ჯიუტები და სძულდეს ცვლილება. არ გადააადგილოთ მათი წყალი ან საკვების თასი. მათ ასევე არ უყვართ ვარჯიში, მაგრამ სჭირდებათ; დარწმუნდით, რომ მათ აქვთ რეგულარული რუტინა. ისინი გიჟდებიან კომფორტზე, უნდა იყოს მშვიდი და უსაფრთხო. მათ აქვთ მოსიყვარულე განწყობა და უაღრესად ერთგულები არიან.' },
    { src: mesame, sign: 'ტყუპები (მაისი 21-ივნისი 20)', text: 'გონებრივი მერკური მართავს, ტყუპების ნიშანი ასოცირდება კომუნიკაციასთან, ინფორმაციასთან, ლაპარაკთან და მედიასთან. ამ ნიშნის ძაღლები ჩვეულებრივ ვოკალურები არიან. ისინი მუდამ დაკავებულები და მოძრაობაში არიან, ამიტომ ბევრი რამ აქვთ სათქმელი. ტყუპების ძაღლების მსგავსად, მათი ადამიანური კოლეგები არიან სუპერ ჭკვიანები და ძალიან ცნობისმოყვარეები, რამაც შეიძლება გამოიწვიოს გართობაც და ბოროტებაც. მათი პიროვნება შეიძლება შეიცვალოს სიმშვიდიდან სიგიჟემდე. მათ გააჩნიათ კომიკური თვისებები, რომელიც მომხიბვლელია და სახალისო .' },
    { src: meotxe, sign: 'კიბო (ივნისი 21-ივლისი 22)', text: 'კირჩხიბი წყლის ნიშანია, მოტივირებულია ემოციით და არა ლოგიკით, რაც მათ მგრძნობიარეს და ინტუიციურს ხდის. დაბადებულები არიან მაშინ, როდესაც მზე ყველაზე მაღალია, მათ აქვთ მშვიდი, მაგრამ შინაგანი ძალა და მოძრაობენ საკუთარი სიჩქარით. კირჩხიბებს უყვართ თავიანთი ძილი და საჭმელები. ვინაიდან ისინი არ არიან ვარჯიშის მოყვარულნი, ურჩევნიათ რამდენიმე მოკლე გასეირნება , ვიდრე გრძელი ლაშქრობა. მათთვის ხმამაღალი ხმები აღმაშფოთებელია; ისინი საუკეთესოდ ხარობენ უსაფრთხო, მყუდრო გარემოში საყვარელ ადამიანებთან ერთად. რაც მთავარია, ისინი ღრმად არიან ერთგულნი და იცავენ თავიანთ ადამიანურ მშობლებს.' },
    { src: mexute, sign: 'ლომი (ივლისი 23-აგვისტო 22)', text: 'ლომი არის მეფის, დედოფლის ან ლომის ნიშანი. ისინი ამაყი არსებები არიან, რომლებიც დაიბადნენ მმართველობისთვის, ბრწყინავებისთვის და უყვართ ყურადღების ცენტრში ყოფნა. ბუნებრივად ქარიზმატულები არიან, ისინი ასხივებენ სითბოს, სიცოცხლისუნარიანობას და ძალას. მათ არ მოსწონთ კონკურენცია; მათ ურჩევნიათ მარტოხელა ძაღლი იყვნენ ოჯახში, რომელსაც თაყვანს სცემენ და დააკმაყოფილებენ მათ ყველა საჭიროებას. მათ ასევე უყვართ მოვლილად და განებივრებულად ყოფნა . მოუთმენლად ელიან მოგზაურობას ძაღლების სპა-ში. ლაშქრობაში თუ ქალაქის ცენტრში სეირნობისას, ისინი ვარსკვლავს დაგამსგავსებენ.' },
    { src: meekvse, sign: 'ქალწული (აგვისტო 23-სექტემბერი 22)', text: 'ამბობენ, რომ ისინი კრიტიკულები, აკვიატებულები და ზედმეტად ანალიტიკურები არიან. სიმართლე ის არის, რომ მათზე ძალიან ზრუნავენ და სურთ, რომ ყველაფერი იყოს სრულყოფილი. ისინი უაღრესად თავდადებულები და შრომისმოყვარეები არიან, მაღალი იდეალებით, დიდი მთლიანობითა და სამსახურის სიყვარულით. ტყუპების მსგავსად, მათ მართავს გონების პლანეტა მერკური, ამიტომ ქალწულმა ლეკვებმა იციან კომუნიკაცია , როგორც მოქმედებებით თუ სერიოზული გამოხედვით. ისინი საუკეთესოდ ამყარებენ წესრიგს და რუტინას: იგივე საკვები, დღის ერთსა და იმავე დროს. მათ ასევე უყვართ სისუფთავე და მოვლილად ყოფნა. ისინი არიან შესანიშნავი ძიძები როგორც ბავშვებისთვის, ასევე ლეკვებისთვის' },
    { src: meshvide, sign: 'სასწორი (სექტემბერი 23-ოქტომბერი 22)', text: 'მათ რომანტიული ვენერა მართავს, სასწორი სიყვარულისა და ქორწინების ნიშანია. მათი მიზანია შექმნან ჰარმონია, სილამაზე და სიმშვიდე, ამიტომ გასაკვირი არ არის, რომ ეს ნიშანი ასოცირდება ხელოვანთან, საყვარელთან და დიპლომატთან. ისინი გამოირჩევიან თავიანთი ხიბლით და აქვთ ნიჭი, იგრძნონ ის, რაც სხვებს სჭირდებათ. ვენერას მართულ ძაღლებს აქვთ მიმზიდველი ხასიათი და ღრმად არიან მიბმული სხვა შინაურ ცხოველებთან და ადამიანებთან. უპირატესობას ანიჭებენ კომპანიონობას, ვიდრე მარტო ყოფნას და ხშირად მოსწონთ ადამიანების მიყოლა. ისინი არაკომფორტულად გრძნობენ თავს სტრესულ ან ქაოტურ გარემოში და აფასებენ სიმშვიდესა და სიმშვიდეს, ვიდრე მოქმედებასა და თავგადასავალს.' },
    { src: merve, sign: 'მორიელი (ოქტომბერი 23-ნოემბერი 21)', text: 'მორიელი ძალიან გაუგებარი ნიშანია. ისინი ცნობილები არიან სექსუალური და იდუმალი ყოფილებით - რაც ხშირად ასეა, მაგრამ ეს ნამდვილად არ ეხება ამ ნიშნის ინტენსივობას. მორიელებმა იციან, რომ ცხოვრება სუსტია და ამის შედეგად უფრო ვნებიანად ცხოვრობენ. ისინი არიან ზოდიაქოს შამანები და ფსიქოლოგები, რომლებიც იკვლევენ ღრმა საგნებს. სერიოზული თვალით კონტაქტს ამყარებენ და, როგორც ჩანს, შეუძლიათ თქვენი აზრების წაკითხვა. უყვართ ერთი ადამიანის ერთგულება. მათ გარკვეული დრო სჭირდება ნდობის ჩამოსაყალიბებლად, მაგრამ როცა ამას აკეთებენ, გყავთ მეგობარი და მოკავშირე მთელი ცხოვრების განმავლობაში.' },
    { src: mecxre, sign: 'მშვილდოსანი (ნოემბერი 22- დეკემბერი 21)', text: 'მშვილდოსანი მოგზაურის, ფილოსოფოსისა და სტუდენტის სიმბოლოა. მათ შეიძლება არ იცოდნენ ცხოვრების აზრი, მაგრამ იციან, რომ ცხოვრებას აქვს აზრი და ეძებენ მის მიზანს. მათთვის ცხოვრება გაბედული თავგადასავალია. ისინი ცნობილილები არიან დიდი ოცნებებით, დიდი პიროვნებითა და მოგზაურობის სიყვარულით. მშვილდოსან ძაღლებს სჭირდებათ ადგილი სეირნობისთვის და გრძნობენ შფოთვას, როდესაც იძულებულნი არიან დარჩნენ სახლში. ისინი მაქსიმალურად ბედნიერები არიან გარეთ ყოფნაში. მათ აქვთ ფერადი და კომიკური პიროვნებები და მეგობრულები არიან (როგორც ხალხთან, ასევე შინაურ ცხოველებთან) და შესანიშნავი მოგზაურობის კომპანიონები არიან.' },
    { src: meate, sign: 'თხის რქა (დეკემბერი 22-იანვარი 19)', text: 'თხის რქები ასოცირდება პასუხისმგებლობასთან, ავტორიტეტთან და ძალასთან. სერიოზული სატურნი მართავს, ეს ნიშანი ცნობილია თავისი მისწრაფებით, მონდომებითა და ძლიერი სამუშაო ეთიკით. მათი სიმბოლოა მთის თხა; მათ აქვთ ამბიციური მიზნები და არ ეშინიათ შრომისმოყვარეობის მწვერვალზე ასასვლელად. ქუდის თოხები არ არიან ზარმაცი. სინამდვილეში, ისინი ცოცხლდებიან, როდესაც მათ აქვთ შესაძლებლობა ისწავლონ ახალი დავალება ან უნარი. ისინი ასრულებენ ბრძანებებს და უყვართ თავიანთი მოვალეობების შესრულება. ისინი შესანიშნავი მცველი ძაღლები და ძიძები არიან.' },
    { src: metertmete, sign: 'მერწყული (იანვარი 20-თებერვალი 18)', text: 'მერწყული მეამბოხე და არაკონფორმისტის ნიშანია. ეს პიროვნებები ჭკვიანები არიან, ჯიუტი, რაციონალური და ექსცენტრიული. შინაური ცხოველები ერთნაირად მიდიან თავიანთ რიტმზე და ადგენენ საკუთარ წესებს. ექსცენტრიული ურანი მართავს, ისინი ზოგჯერ შეიძლება არაპროგნოზირებადი იყვნენ. მათ უყვართ ცვლილებები და სძულთ მოწყენილობა. მერწყული ძაღლები ყოველთვის მზად არიან ახალი სათამაშოსთვის, ხრიკისთვის ან დასასვენებლად. ისინი შეიძლება არ იყვნენ თბილები და მოსიყვარულეები, მაგრამ ისინი უკიდურესად სოციალურები და მეგობრულები არიან ადამიანებთან და სხვა შინაურ ცხოველებთან. სინამდვილეში, არავინ აჩენს უკეთეს ან უფრო ერთგულ მეგობარს, ვიდრე ეს ცბიერი ძაღლები.' },
    { src: metormete, sign: 'თევზები (თებერვალი 19-მარტი 20)', text: 'ნეპტუნის მმართველობით, თევზები მართავენ შთაგონებისა და წარმოსახვის უხილავ და უხილავ სამყაროს. ესენი არიან ზოდიაქოს მეოცნებეები, მისტიკოსები და მუსიკოსები. ღრმად არის და უაღრესად ინტუიური, მათ სჭირდებათ სივრცე და სიმშვიდე. მათ უყვართ ადამიანებთან ერთად სიახლოვე, ხანდახან მიჰყვებიან მათ გარშემო და იძინებენ საფარქვეშ. ისინი ასევე გრძნობენ თქვენს განწყობას, რის გამოც ისინი ქმნიან თერაპიულ ძაღლებს. მზიან ადგილას დაძინება მუსიკით მათი ბედნიერი ადგილია.' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="about-container"
    >
      <div className="home-containerzodiac">
        <div className="image-columnzodiac">
          <img src={main} alt="Main Logo" />
        </div>
        <div className="text-columnzodiachello">
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            
          >
            თქვენ ალბათ იცით საკუთარი ზოდიაქოს ნიშანი, მაგრამ იცით თუ არა თქვენი ძაღლის ზოდიაქოს ნიშანი? მეტი ცოდნა თქვენი ძაღლის პიროვნების შესახებ დაგეხმარებათ უკეთ 
            იზრუნოთ მათზე. უძველესი დროიდან ადამიანები უყურებენ ცაში ვარსკვლავებსა და პლანეტებს, ცდილობდნენ გაერკვნენ მათი ადგილი კოსმოსში. ინდივიდის დაბადების 
            დროს პლანეტების პოზიციების შესწავლით, ასტროლოგებს შეუძლიათ გაიგონ ბევრი რამ ადამიანის ან შინაური ცხოველის შესახებ, როგორიცაა მათი ხასიათი და პოტენციალი, 
            ასევე მათი შეზღუდვები და როგორ გადაჭრან ისინი. ასტროლოგიას ასევე შეუძლია გაგვაცნოს აქტუალური საკითხები, რამდენად თავსებადები ვართ ჩვენს ცხოვრებაში მნიშვნელოვან 
            ადამიანებთან ან შინაურ ცხოველებთან.
            <br />
            წაიკითხეთ, რომ გაიგოთ ძაღლის ზოდიაქოს ნიშნები და რას ამბობს თქვენი ძაღლის ასტროლოგიის ნიშანი მათ შესახებ
          </motion.p>
        </div>
      </div>

      <div className="zodiac-grid">
        {zodiacSigns.map(({ src, sign, text }, index) => (
          <div className="zodiac-item" key={index}>
            <div className="image-columnzodiac">
              <img src={src} alt={sign} />
            </div>
            <div className="text-columnzodiac">
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                {sign}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                {text}
              </motion.p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default About;