// User 欄位資料
var _data = [
  {
    id: 1,
    name: 'George Maria Anderson',
    email: 'f.lhp@izxld.to',
    phone: ['0996-001371'],
    date: '2021-03-01',
  },
  {
    id: 2,
    name: 'Scott Dorothy Lewis',
    email: 'x.uqtt@eoeuyhtxs.com.cn',
    phone: ['0956-127745'],
    date: '2021-03-02',
  },
  {
    id: 3,
    name: 'Donna Timothy Brown',
    email: 'y.dnfhyk@odu.th',
    phone: ['0959-871815'],
    date: '2021-03-05',
  },
  {
    id: 4,
    name: 'Brenda Mary Miller',
    email: 'v.bxtk@tjmpxkwbr.fo',
    phone: ['0948-327435'],
    date: '2021-03-10',
  },
  {
    id: 5,
    name: 'Steven Jose Martin',
    email: 'o.gxs@tlcv.de',
    phone: ['0953-745908'],
    date: '2021-03-15',
  },
  {
    id: 6,
    name: 'Michelle Lisa Harris',
    email: 'g.bxci@irqoiy.re',
    phone: ['0931-155138'],
    date: '2021-03-02',
  },
  {
    id: 7,
    name: 'Richard Scott Young',
    email: 'c.synbon@qyouvyx.az',
    phone: ['0934-303587'],
    date: '2021-03-03',
  },
  {
    id: 8,
    name: 'Robert Jeffrey Allen',
    email: 'i.bsyehyz@hiznxb.gi',
    phone: ['0946-244714'],
    date: '2021-03-06',
  },
  {
    id: 9,
    name: 'Melissa Karen Johnson',
    email: 'p.riefbalc@boqmwc.lu',
    phone: ['0905-131221'],
    date: '2021-03-21',
  },
  {
    id: 10,
    name: 'Dorothy Karen Harris',
    email: 'k.fdu@ymrjgxs.lk',
    phone: ['0970-944111'],
    date: '2021-03-30',
  },
  {
    id: 11,
    name: 'John Linda Anderson',
    email: 's.rwdrw@jnbsdplf.pm',
    phone: ['0922-782576'],
    date: '2021-03-31',
  },
  {
    id: 12,
    name: 'Larry Christopher Hernandez',
    email: 'k.cctncwn@kpwpkoor.museum',
    phone: ['0927-842481'],
    date: '2021-03-01',
  },
  {
    id: 13,
    name: 'Karen Nancy Thomas',
    email: 'n.xlnl@hkpg.mp',
    phone: ['0953-883864'],
    date: '2021-03-22',
  },
  {
    id: 14,
    name: 'Anthony Sarah Harris',
    email: 'w.lipm@qmexko.ye',
    phone: ['0974-331398'],
    date: '2021-03-24',
  },
  {
    id: 15,
    name: 'Angela William Garcia',
    email: 'm.ovcmohtpb@akzovhh.de',
    phone: ['0966-210234'],
    date: '2021-03-11',
  },
  {
    id: 16,
    name: 'Sandra David Taylor',
    email: 'y.hwzpr@qoame.ke',
    phone: ['0993-787941'],
    date: '2021-03-17',
  },
  {
    id: 17,
    name: 'David Laura Anderson',
    email: 'z.zicwf@grtwucgkt.ly',
    phone: ['0973-644816'],
    date: '2021-03-05',
  },
  {
    id: 18,
    name: 'Jason Dorothy Rodriguez',
    email: 'u.ykeweu@jsoqrxte.pf',
    phone: ['0957-447222'],
    date: '2021-03-04',
  },
  {
    id: 19,
    name: 'Kevin Steven Robinson',
    email: 'o.zcvql@ixojb.gn',
    phone: ['0909-131886'],
    date: '2021-03-09',
  },
  {
    id: 20,
    name: 'Betty Sharon Jackson',
    email: 's.mtrlx@wnivluqes.ki',
    phone: ['0930-335482'],
    date: '2021-03-10',
  },
  {
    id: 21,
    name: 'Robert Donald Harris',
    email: 'l.njhlplihy@ulioq.ci',
    phone: ['0918-582288'],
    date: '2021-03-29',
  },
  {
    id: 22,
    name: 'Joseph Sharon Lopez',
    email: 'e.nciqeidv@qzoinaudbx.pw',
    phone: ['0938-217401'],
    date: '2021-03-18',
  },
  {
    id: 23,
    name: 'Steven Mark Jones',
    email: 'j.zmanq@axmsx.tn',
    phone: ['0931-283902'],
    date: '2021-03-19',
  },
  // {
  //   id: 24,
  //   name: 'Sandra Eric Thomas',
  //   email: 'k.svhwbemp@mjnmh.ma',
  //   phone: ['0999-821075'],
  //   date: '2021-03-20',
  // },
  // {
  //   id: 25,
  //   name: 'Deborah Daniel Walker',
  //   email: 'p.giszzjsg@ixqfmlnxo.cy',
  //   phone: ['0930-744958'],
  //   date: '2021-03-03',
  // },
];

/**
 * 1. 關鍵字搜尋(Slow)
 * (1) for迴圈比對每個物件value
 * (2) 將每個物件轉為字串
 * (3) 利用ES6 set(集合)方法篩選唯一值
 *
 * @param {string} value
 * @param {object[]} _array
 * @return {object[]} 回傳符合搜尋結果的物件陣列
 */
function searchKeywords(value, _array = []) {
  const matchsArray = [];
  // 字串不限制大小寫與去除空白
  const regexpResult = new RegExp($.trim(value), "ig");

  // 遍歷陣列中的object
  for (let i = 0; i < _array.length; i++) {
    for (key in _array[i]) {
      // 組合一個新字串
      const scanValue = Object.keys(_array[i]).reduce((res, key) => {
        // 排除id欄位篩選
        return key !== "id" ? res + _array[i][key] : res;
      }, "");

      // 比對正則條件字串
      if (scanValue.match(regexpResult)) matchsArray.push(_array[i]);
    }
  }

  /* === 集合方法篩選唯一值 === */
  const _set = new Set();
  const result = matchsArray.filter((item) =>
    !_set.has(JSON.stringify(item)) ? _set.add(JSON.stringify(item)) : false
  );

  // const result = [
  //   ...new Set(matchsArray.map((item) => JSON.stringify(item)))
  // ].map((item) => JSON.parse(item));

  const newRes = !result ? [] : result;
  refetchTable(newRes);
  return newRes;
}

/**
 * 2. 關鍵字搜尋(Quick)
 * @param {string} value
 * @param {object[]} _array
 * @return {object[]} 回傳符合搜尋結果的物件陣列
 */
function filterKeywords(value, _array = []) {
  // 字串不限制大小寫與去除空白
  const regexpResult = new RegExp($.trim(value), "ig");
  // 篩選物件陣列
  const result = _array.filter((obj) => {
    // 組合一個新字串
    const scanValue = Object.keys(obj).reduce((res, key) => {
      // 排除id欄位
      return key !== "id" ? res + obj[key] : res;
    }, "");

    // 比對正則條件字串
    return scanValue.match(regexpResult);
  });

  refetchTable(result);
  return result;
}

/**
 * 3. 關鍵字搜尋(Lodash)
 * @param {string} value
 * @param {object[]} _array
 * @return {object[]} 回傳符合搜尋結果的物件陣列
 */
function lodashFilterKeywords(value, _array = []) {
  // 篩選物件陣列
  const result = _.filter(_array, function (obj) {
    // 組合一個新字串
    const scanValue = Object.keys(obj).reduce((res, key) => {
      // 排除id欄位
      return key !== "id" ? res + obj[key] : res;
    }, "");

    // 比對符合的字串, 不限制大小寫與去除空白
    return _.includes(
      _.lowerCase(_.trim(scanValue)),
      _.lowerCase(_.trim(value))
    );
  });

  refetchTable(result);
  return result;
}

/**
 * 重新渲染 Table
 * @param {Array} feedbackData 欄位資料
 */
function refetchTable(feedbackData = []) {
  let $element = $("#userTable>tbody");
  $element.empty();

  if (feedbackData && feedbackData.length) {
    // 顯示所有資料
    $.each(feedbackData, function (key, item) {
      let row = $("<tr></tr>");
      
      row.append($('<td></td>').html(item.name));
      row.append($('<td></td>').html(item.email));
      row.append($('<td></td>').html(item.phone));
      row.append($('<td></td>').html(item.date));
      
      $element.append(row);
    });
    
    // 顯示總筆數
    document.getElementById("total").innerHTML = "共 " + feedbackData.length + " 筆資料";

  } else {
    $element
      .empty()
      .html($("<tr></tr>").append('<td colspan="4">No Data.</td>'));
  }
}

// ====== Used ======
  /**
   * 顯示搜尋結果
   * @param {string} value
   * @param {object[]} arr
   */
  const showSearchResult = (value, arr = []) => {
    searchKeywords(value, arr);
  };

  $("#searchTxt").on("keyup", function () {
    const _value = $(this).val();

    // 事件延遲0.5秒執行, 減少reflow
    setTimeout(() => {
      showSearchResult(_value, _data);
    }, 500);
});



// 點擊 #add-btn 打開Modal，欄位 Date：顯示當天加一天的日期
$( '#add-btn' ).on( 'click', function ( e ) {
  // e.preventDefault()

  let date = new Date();
  const formatDate = ()=>{
    formatted_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate()+1)
    return formatted_date;
  }

  document.getElementById("date").innerHTML = formatDate(date);
  
} );


// addfrom 新增表單
$("#addBtn").click(function(e){
  // 表單驗證
  let phoneValiate = /09\d{2}-\d{6}/;
  let emailValiate = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
  let validate = $("form#addform").validate({
    rules:{
      enname: {
        required: true,
      },
      email: {
        required: true,
        email: true,
        pattern: emailValiate,
      },
      phone: {
        required: true,
        minlength: 10,
        pattern: phoneValiate,
      },
    },
    messages: {
      enname: {
        required: "此欄位為必填",
      },
      email: {
        required: "此欄位為必填",
        email: "Email格式錯誤",
        pattern: "Email格式錯誤",
      },
      phone: {
        required: "手機號碼格式錯誤",
        minlength: "手機格式錯誤",
        pattern: "手機格式錯誤",
      },
    },

    submitHandler: function (form) {
      const formElement = document.getElementById("addform");
      let enname = formElement[0].value;
      let email = formElement[1].value;
      let phone = formElement[2].value;
      let date = document.getElementById("date").innerHTML;
      let newData = {
        id: _data.length + 1,
        name: enname,
        email: email,
        phone: phone,
        date: date
      }
      _data.push(newData);
      $("#addform")[0].reset();

      $("#closeAddFormModal").click();
      e.preventDefault();
      refetchTable(_data);
    },
  });
  
});


// 分頁
/**
 * 分頁標籤 Pagination
 * @param {Array} feedbackData 欄位資料
 * @param {num} currentRowsShown 選擇中的顯示筆數
 */
let rowsShown;
function getPagination (feedbackData = [], currentRowsShown) {
  rowsShown = (currentRowsShown)? currentRowsShown: 5;

  let numPages = Math.ceil(feedbackData.length/rowsShown);

  for(i=0; i<numPages; i++){
    let pageNum = i+1;
    $("#pagination").append('<li class="page-item" id="pageItem" rel='+ pageNum +'><a class="page-link" href="#">'+ pageNum +'</a></li>')
  }
  $('#data tr').hide(); //隱藏所有資料
  $('#data tr').slice(0, rowsShown).show(); //顯示指定內容數量的資料

  $('#pagination #pageItem:first').addClass('active');

  // 點擊分頁標籤，變動顯示的資料內容，透過CSS隱藏
  let lastPage = 1;
  $('#pagination li').on('click', function(){
    lastPage = 1;
    let currPage;

    if($(this).attr("id") === "pageItem"){
      $('#pagination li').removeClass('active');
      $(this).addClass('active');
      currPage = $(this).attr('rel');
      lastPage = currPage;
    } 

    let startItem = currPage * rowsShown;
    let endItem = startItem + rowsShown;
    $('#data tr').css('opacity','0.0').hide().slice(startItem, endItem).css('display','table-row').animate({opacity:1}, 300);
  });

  // $("#prev").on('click', function(){
    //    $('#pagination')
    //    .find('li.active')
    //    .prev()
    //    .addClass('active');
    //  });
  }
  
  $("#maxRows").on('change',function (e) {
    currentRowsShown = parseInt($(this).val());
  
    $('#pagination')
    .find('li')
    .slice(2)
    .remove();
  
    getPagination(_data, currentRowsShown);
  });
// 顯示筆數變動時，取得變動的數字，並變動分頁標籤&顯示資料
