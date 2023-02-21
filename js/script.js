const headerList = document.querySelector('.header__list');
const burger = document.querySelector('.header__burger');
burger.addEventListener('click',function(){
    console.log('click');
    headerList.classList.toggle('active');
});

const items = document.querySelectorAll('.partners__item');
items.forEach(item => {
    item.addEventListener('mouseover',function(e){
    
        let target = e.target.closest('.hidden-item');
        let targetTwo = item.querySelector('.show-item');
        console.log(targetTwo);
        if(!target && !targetTwo) return;
        target.style.cssText = `opacity:1;`;
        targetTwo.classList.add('hide');
        
        
    });
    item.addEventListener('mouseout',function(e){
        let target = e.target.closest('.hidden-item');
        let targetTwo = item.querySelector('.show-item');
        if(!target && !targetTwo) return;
        target.style.cssText = ``;
        targetTwo.classList.remove('hide');
    })
})

const partnersItem = document.querySelectorAll('.nofee-partners__row');
partnersItem.forEach(item => {
    let arrowBlock = item.querySelector('.arrow-block');
    let arrowBlockHidden = item.querySelector('.arrow-block-hidden');
    let infoBlock = item.querySelector('.column-info-block');
    let showItem = item.querySelector('.show-item');
    let hideItem = item.querySelector('.hidden-item');
    
    arrowBlock.addEventListener('click',function(){
        
        arrowBlock.classList.toggle('close');
        arrowBlockHidden.classList.toggle('open');
        infoBlock.classList.toggle('open');
        item.classList.toggle('open');
        showItem.classList.add('hide');
        hideItem.style.cssText = `opacity:1;`;
    })
    arrowBlockHidden.addEventListener('click',function(){
        console.log('click')
        arrowBlock.classList.toggle('close');
        arrowBlockHidden.classList.toggle('open');
        infoBlock.classList.toggle('open');
        item.classList.toggle('open');
        showItem.classList.remove('hide');
        hideItem.style.cssText = ``;
    })
});
const sityName = document.querySelector('.sity-block__name');
const sityList = document.querySelector('.sity-list');
const sityBlock = document.querySelector('.header__sity-block');
const sityItems = document.querySelectorAll('.sity__item');
sityBlock.addEventListener('click',function(){
    sityList.classList.toggle('open');
})
sityItems.forEach(sityItem => {
    sityItem.addEventListener('click',function(e){
        let choice = e.target.innerHTML;
        sityName.innerHTML = choice;
    })
})
