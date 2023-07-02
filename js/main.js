//top버튼 스크롤 맨위로
const topBtn = document.querySelector('#footer .top')
topBtn.addEventListener('click',e=>{
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

// 영문 대문자로 변경
const nav = document.querySelectorAll('#header .nav .gnb li a')
const textUpperCase =(name)=>{
    for (var i = 0; i < name.length; i++) {
        var text = name[i].textContent;
        var upperCaseText = text.toUpperCase();
        name[i].textContent = upperCaseText;
      }
}
textUpperCase(nav)

//태블릿창, 모바일창 메뉴버튼 토글
const allMenu = document.querySelector('#header .all-menu i');
const gnb = document.querySelector('#header .nav .gnb');
const bg = document.querySelector('#header .bg');
const gnbList = document.querySelectorAll('#header .nav .gnb .MenuList');
const gnbItem = document.querySelectorAll('#header .nav .gnb .MenuList ul');
const header = document.querySelector('#header')
allMenu.addEventListener('click',e=>{
    if(e.currentTarget.classList.contains('xi-bars')){
        allMenu.classList.replace('xi-bars','xi-close');
        gnb.style.display='block';
        bg.style.display='block';
    }else{
        allMenu.classList.replace('xi-close','xi-bars')
        gnb.style.display='none';
        bg.style.display='none';
    }
    gnbItem.forEach(ele=>{
        ele.classList.remove('on')
    })
})
bg.addEventListener('click',e=>{
    allMenu.classList.replace('xi-close','xi-bars')
    gnb.style.display='none';
    bg.style.display='none';
    gnbItem.forEach(ele=>{
        ele.classList.remove('on')
    })
})

//메뉴안에 하단메뉴 마우스오버

gnbList.forEach(item=>{
    item.addEventListener('mouseenter',e=>{
        let current = e.currentTarget;
        gnbItem.forEach(ele=>{
            ele.classList.remove('on');
        })
        current.children[1].classList.add('on')
    })
})
header.addEventListener('mouseleave',e=>{
    gnbItem.forEach(ele=>{
        ele.classList.remove('on')
    })
})

 