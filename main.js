  var ctx = document.getElementById("myPieChart");
  // ボタンをクリックした時に
  $('.complete-btn').click(function(){

   // 入力値を取得して、変数に代入
    var startAge = $('.startAge').val();
    var finishAge = $('.finishAge').val();

    var intercept = $('.intercept').val();

    var income20 = $('.income20').val();
    var income30 = $('.income30').val();
    var income40 = $('.income40').val();
    var income50 = $('.income50').val();
    var income60 = $('.income60').val();
    var income70 = $('.income70').val();
    var income80 = $('.income80').val();
    var income90 = $('.income90').val();
    var income100 = $('.income100').val();

    var inv = $('.inv').val();
    var interestPercent = $('.interestPercent').val();

    var expense20 = $('.expense20').val();
    var expense30 = $('.expense30').val();
    var expense40 = $('.expense40').val();
    var expense50 = $('.expense50').val();
    var expense60 = $('.expense60').val();
    var expense70 = $('.expense70').val();
    var expense80 = $('.expense80').val();
    var expense90 = $('.expense90').val();
    var expense100 = $('.expense100').val();


    //グラフ用データの作成
    var myData = new Array();
    myData["labels"] = [];
    myData["data"] = [];

    //シミュレーション年齢（仮）
    //var startAge = 33;
    //var finishAge = 55;

    //startAgeの1の位を取得
    var firstPlace = parseInt(String(startAge)[1]);
    //console.log(firstPlace);

    //投資総額の宣言
    var sumInv = 0;
    //var inv = 180;
    //運用利回りの宣言
    //var interest = 1.05;
    var interest = 1 + interestPercent/100;

    //投資総額を計算する関数
    var calcInv = (n) => {
      sumInv = inv * (n - startAge);
      //console.log(sumInv);
      //console.log(sumInv);
      var getInvYear = sumInv * interest;
      //console.log(getInv);
      return getInvYear;
      //return sumInv;
    }

    console.log(interest);
    console.log("attention please");

    //calcInv(34);
    //console.log(getInv);
    //calcInv(35);

    //別の関数でreturnされた値を使用
    /*var useInv = (n) =>{
      //console.log(sumInv * interest);
      var getInv = sumInv * interest;
      console.log(getInv);
      return getInv;
    }
    useInv();*/

    //年齢ごとの資産額を動的に生成（投資額計算）
    /*var sum = (n) => {
      //console.log("hello world");
      //sumInv = inv * n;
      //console.log(sumInv);
      if(n == 20){
        if(startAge == 20){
          return parseInt(income20 - inv - expense20) + parseInt(intercept) + getInv;
        }else{
          return parseInt(income20 - inv - expense20) + getInv;
        }
      }else if(20 < n && n < 30){
        if(n == startAge){
          return Math.round(parseInt(income20) - inv + ((income30-income20) / 10 * firstPlace - expense20) + parseInt(intercept) + getInv);
        }else{
          return Math.round(parseInt(income20) - inv + ((income30-income20) / 10 * n - expense20) + sum(n-1) + getInv);
        }
      }else if(n == 30){
        if(startAge == 30){
          return parseInt(income30 - inv - expense30) + parseInt(intercept) + getInv;
        }else{
          return parseInt(income30 - inv - expense30) + sum(n-1) + getInv;
        }
      }else if(30 < n && n < 40){
        if(n == startAge){
          return Math.round(parseInt(income30) - inv + ((income40-income30) / 10 * firstPlace - expense30) + parseInt(intercept) + getInv);
        }else{
          return Math.round(parseInt(income30) - inv + ((income40-income30) / 10 * n - expense30) + sum(n-1) + getInv);
        }
      }else if(n == 40){
        if(startAge == 40){
          return parseInt(income40 - inv - expense40) + parseInt(intercept) + getInv;
        }else{
          return parseInt(income40 - inv - expense40) + sum(n-1) + getInv;
        }
      }else if(40 < n && n < 50){
        if(n == startAge){
          return Math.round(parseInt(income40) - inv + ((income50-income40) / 10 * firstPlace - expense40) + parseInt(intercept) + getInv);
        }else{
          return Math.round(parseInt(income40) - inv + ((income50-income40) / 10 * n - expense40) + sum(n-1) + getInv);
        }
      }else if(n == 50){
        if(startAge == 50){
          return parseInt(income50 - inv - expense50) + parseInt(intercept) + getInv;
        }else{
          return parseInt(income50 - inv - expense50) + sum(n-1) + getInv;
        }
      }else if(50 < n && n < 60){
        if(n == startAge){
          return Math.round(parseInt(income50) - inv + ((income60-income50) / 10 * firstPlace - expense40) + parseInt(intercept) + getInv);
        }else{
          return Math.round(parseInt(income50) - inv + ((income60-income50) / 10 * n - expense50) + sum(n-1) + getInv);
        }
      }else if(n == 60){
        if(startAge == 50){
          return parseInt(income60 - inv - expense60) + parseInt(intercept) + getInv;
        }else{
          return parseInt(income60 - inv - expense60) + sum(n-1) + getInv;
        }
      }else{
        console.log("範囲外です");
      }
    }*/


    //年齢ごとの資産額を動的に生成（バックアップ，正確に動いたコード）
    var sum = (n) => {
      if(n == 20){
        if(startAge == 20){
          return parseInt(income20 - expense20) + parseInt(intercept)/*a*/;
        }
        return parseInt(income20 - expense20)/*a*/ ;
      }else if(20 < n && n < 30){
        if(n == startAge){
          return Math.round(parseInt(income20) + ((income30-income20) / 10 * firstPlace - expense20) + parseInt(intercept)/*a*/);
        }
        return Math.round(parseInt(income20) + ((income30-income20) / 10 * parseInt(String(n)[1]) - expense20) + sum(n-1)/*a*/);
      }else if(n == 30){
        if(startAge == 30){
          return parseInt(income30 - expense30) + parseInt(intercept)/*a*/;
        }
        return parseInt(income30 - expense30) + sum(n-1)/*a*/;
      }else if(30 < n && n < 40){
        if(n == startAge){
          return Math.round(parseInt(income30) + ((income40-income30) / 10 * firstPlace - expense30) + parseInt(intercept)/*a*/);
        }
        return Math.round(parseInt(income30) + ((income40-income30) / 10 * parseInt(String(n)[1]) - expense30) + sum(n-1)/*a*/);
      }else if(n == 40){
        if(startAge == 40){
          return parseInt(income40 - expense40) + parseInt(intercept)/*a*/;
        }
        return parseInt(income40 - expense40) + sum(n-1)/*a*/;
      }else if(40 < n && n < 50){
        if(n == startAge){
          return Math.round(parseInt(income40) + ((income50-income40) / 10 * firstPlace - expense40) + parseInt(intercept)/*a*/);
        }
        return Math.round(parseInt(income40) + ((income50-income40) / 10 * parseInt(String(n)[1]) - expense40) + sum(n-1)/*a*/);
      }else if(n == 50){
        if(startAge == 50){
          return parseInt(income50 - expense50) + parseInt(intercept)/*a*/;
        }
        return parseInt(income50 - expense50) + sum(n-1)/*a*/;
      }else if(50 < n && n < 60){
        if(n == startAge){
          return Math.round(parseInt(income50) + ((income60-income50) / 10 * firstPlace - expense50) + parseInt(intercept)/*a*/);
        }
        return Math.round(parseInt(income50) + ((income60-income50) / 10 * parseInt(String(n)[1]) - expense50) + sum(n-1)/*a*/);
      }else if(n == 60){
        if(startAge == 60){
          return parseInt(income60 - expense60) + parseInt(intercept)/*a*/;
        }
        return parseInt(income60 - expense60) + sum(n-1)/*a*/;
      }else if(60 < n && n < 70){
        if(n == startAge){
          return Math.round(parseInt(income60) + ((income70-income60) / 10 * firstPlace - expense60) + parseInt(intercept)/*a*/);
        }
        return Math.round(parseInt(income60) + ((income70-income60) / 10 * parseInt(String(n)[1]) - expense60) + sum(n-1)/*a*/);
      }else if(n == 70){
        if(startAge == 70){
          return parseInt(income70 - expense70) + parseInt(intercept)/*a*/;
        }
        return parseInt(income70 - expense70) + sum(n-1)/*a*/;
      }else if(70 < n && n < 80){
        if(n == startAge){
          return Math.round(parseInt(income70) + ((income80-income70) / 10 * firstPlace - expense70) + parseInt(intercept)/*a*/);
        }
        return Math.round(parseInt(income70) + ((income80-income70) / 10 * parseInt(String(n)[1]) - expense70) + sum(n-1)/*a*/);
      }else if(n == 80){
        if(startAge == 80){
          return parseInt(income80 - expense80) + parseInt(intercept)/*a*/;
        }
        return parseInt(income80 - expense80) + sum(n-1)/*a*/;
      }else if(80 < n && n < 90){
        if(n == startAge){
          return Math.round(parseInt(income80) + ((income90-income80) / 10 * firstPlace - expense80) + parseInt(intercept)/*a*/);
        }
        return Math.round(parseInt(income80) + ((income90-income80) / 10 * parseInt(String(n)[1]) - expense80) + sum(n-1)/*a*/);
      }else if(n == 90){
        if(startAge == 90){
          return parseInt(income90 - expense90) + parseInt(intercept)/*a*/;
        }
        return parseInt(income90 - expense90) + sum(n-1)/*a*/;
      }else if(90 < n && n < 100){
        if(n == startAge){
          return Math.round(parseInt(income90) + ((income100-income90) / 10 * firstPlace - expense90) + parseInt(intercept)/*a*/);
        }
        return Math.round(parseInt(income90) + ((income100-income90) / 10 * parseInt(String(n)[1]) - expense90) + sum(n-1)/*a*/);
      }else if(n == 100){
        if(startAge == 100){
          return parseInt(income100 - expense100) + parseInt(intercept)/*a*/;
        }
        return parseInt(income100 - expense100) + sum(n-1)/*a*/;
      }else{
        console.log("範囲外です");
      }
    }

    //デバッグ
    //console.log(parseInt(String(34)[1]));
    //console.log(parseInt(income30) + ((income40-income30) / 10 * parseInt(String(34)[1]) - expense30) + 1416);
    //console.log(parseInt(income30) + ((income40-income30) / 10 * parseInt(String(35)[1]) - expense30) + 1662);
    //console.log(sum(24));
    //console.log(sum(40));
    //console.log(sum(58));
    //console.log(sum(61));
    //console.log(sum(16));

    //グラフを動的に作成
    var age = [];

    //任意の年齢間で資産額計算
    var hairetsu3 = [];

    /*var example = () =>{
      var total = 0;
      for(i = 1; i <= 10; i++){
        total += i;
        console.log(total);
      }
    }*/

    //example();

    var hairetsu4 = [];

    var calcComp = (n) => {
      var sumComp = 0;
      for(x = startAge; x <= n; x++){
        var period = x - startAge + 1;
        sumComp += Math.round(inv * (Math.pow(interest, period)));
        console.log(sumComp);
        comp = sumComp - (inv * period);
        console.log(comp);
        //return sumComp;
      }
      hairetsu4.push(comp);
      //return sumComp;
    }
    console.log(hairetsu4);
    //calcComp(35);

    for(let i = startAge; i <= finishAge; i++){
      //var getInv = calcInv(i);//calcCompを導入したら削除
      calcComp(i);

      //console.log(calcInv(i));
      //sumInv = inv * (i - startAge);
      //var getInv = sumInv * interest;
      //return getInv;
      //console.log(getInv);
      //var substInv = getInv - sumInv;
      //console.log(substInv);
      //console.log(sum(i));

      //var asset = sum(i) + substInv;
      //var getSumComp = sumComp;
      //console.log(i - startAge);
      console.log(hairetsu4[i - startAge]);
      console.log(sum(i));
      var asset = sum(i) + hairetsu4[i - startAge];
      console.log(asset);
      hairetsu3.push(asset);
    }

    console.log(hairetsu3);

    //ラベルの年齢を動的に作成
    for(let i = startAge; i <= finishAge; i++){
      //console.log(i - startAge);
      age[i - startAge] = i  + "歳";
    }

    console.log(age);
    console.log(age[1]);
    console.log(finishAge - startAge);
    console.log(interest);
    console.log("attention please");

    // グラフの設定
    var myPieChart = new Chart(ctx, {

      // 棒グラフ
      type: 'bar',
      data: {
        //labels: myData.labels,
        labels:age,
        datasets: [{
            /*backgroundColor: [
                "#e0e0e0",
                "#a0a0a0",
                "#606060",
                "#202020"
            ],*/
            label:'資産額(万円)',
            // 入力値が入っている変数を利用
            //data:hairetsu2
            data:hairetsu3
      }]
      },
      options: {
        title: {
          display: true,
          text: '資産額'
        }
      },
    });
  })
