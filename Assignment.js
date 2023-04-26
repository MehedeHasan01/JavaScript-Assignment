// ১. Variable কি

// ১. উত্তর ঃ- JavaScript Variable হল containers  যা একটি প্রোগ্রামে মান বা ডেটা ধারণ করে। Variable গুলি এমন মান সঞ্চয় করতে ব্যবহৃত হয় যা পরিবর্তন করা যায়, Manipulated করা যায় বা পুরো প্রোগ্রাম জুড়ে উল্লেখ করা যায়।

// ২. Variable কিভাবে লিখতে হয় ?

// ২. উত্তর ঃ- JavaScript Variable কে সংক্ষেপে var বলা হয় বা var লেখা হয়
var myName = "Mehedy Hasan Rony";
console.log(myName)

// ৩. string type variable কি ও কি ভাবে লিখতে হয় ?

// ৩. উত্তর ঃ- JavaScript, একটি string type variable হল একটি পরিবর্তনশীল যাতে অক্ষর বা পাঠ্যের একটি ক্রম থাকে। JavaScript string type variable গুলি পাঠ্যটিকে একক উদ্ধৃতি ('') বা দ্বিগুণ উদ্ধৃতি ("") দিয়ে আবদ্ধ করে উপস্থাপন করা হয়। নিচে একটি উদাহরণ দেওয়া হল:
var stringType = "Mehedy Hasan Rony";


// ৪. number type variable কি ও কি ভাবে লিখতে হয় ?

// ৪. উত্তর ঃ- JavaScript, একটি number type variable হল একটি পরিবর্তনশীল যাতে একটি সংখ্যাসূচক মান থাকে।
var numberType = 30;

// ৫. Boolean type variable  কি ও কি ভাবে লিখতে হয় ?

// ৫. উত্তর ঃ- JavaScript, একটি Boolean type variable হল একটি পরিবর্তনশীল যা শুধুমাত্র দুটি মান ধরে রাখতে পারে: true or false । Boolean type variable গুলি প্রোগ্রামিংয়ে যৌক্তিক মানগুলি উপস্থাপন করতে ব্যবহৃত হয়, যেমন একটি শর্ত true or false ।
 var booleanType = true;
 var booleanType2 = false;
// ৬. toUpperCase() & toLowerCase() এর ব্যাবহার কি ভাবে করতে হয় ?

// ৬. উত্তর ঃ-
  //toUpperCase() \\
var upperCase = "Mehede Hasan Rony"
console.log(upperCase.toUpperCase())

   // toLowerCase() \\
var lowerCase = "MEHEDE HASAN RONY";
console.log(lowerCase.toLocaleLowerCase())

// ৭. JavaScript এর মোট কয়টি অপারেটর আছে ও কি কি ?

// ৭. উত্তর ঃ- JavaScript এর মোট  অপারেটর আছে ৮ টি । যেমন,
//    ১. Arithmetic Operators
//    ২. Assignment Operators
//    ৩. Comparison Operators
//    ৪. String Operators
//    ৫. Logical Operators
//    ৬. Bitwise Operators
//    ৭. Ternary Operators
//    ৮. Type Operators


// ৮. Math.abs() এর ব্যাবহার লিখুন ।

// ৮. উত্তর ঃ-
var a = -40;
var b = 20;
    a =Math.abs(a)
var c = a + b;
console.log(c)

// ৯. Math.celi()  এর ব্যাবহার লিখুন ।

// ৯. উত্তর ঃ-
var d = 13.0234;
    d = Math.ceil(d)
console.log(d)

// ১০. Math.Floor() এর ব্যাবহার লিখুন ।

// ১০. উত্তর ঃ-
var e = 13.9934;
    e = Math.floor(e)
console.log(e)

// ১১. Math.round() এর ব্যাবহার লিখুন ।

// ১১. উত্তর ঃ-
       // Round Up \\
var roundUp = 18.68685;
    roundUp = Math.round(roundUp)
console.log(roundUp)

        //Round Down \\
var roundDown = 20.48685;
    roundDown = Math.round(roundDown)
console.log(roundDown)


// ১২. Math.random() এর ব্যাবহার লিখুন ।

// ১২. উত্তর ঃ-
var randomNumber = Math.random();
console.log(randomNumber)
