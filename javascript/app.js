
// //  ========  // 


const filterBtns = document.querySelectorAll(".pages div");
const Filters = document.querySelectorAll(".row");

console.log(filterBtns);

filterBtns.forEach(btn => {
    btn.addEventListener("click", (e)=>{
        if (e.target.tagName == "DIV") {
            console.log(Filters);
            const targetFilter = document.querySelector(e.target.dataset.target);
            console.log(targetFilter);
            Filters.forEach((filter) => {
                if (filter == targetFilter) {
                    filter.classList.add("active-page");
                    } else {
                    filter.classList.remove("active-page");
                    }
            })
            
        }
    })
});
const revRadioBtns = document.querySelectorAll(".review-radio li");
console.log(revRadioBtns);
const reviewItems = document.querySelectorAll(".review-item");

console.log(reviewItems);

revRadioBtns.forEach(revBtn => {
    revBtn.addEventListener("click", (e)=>{
        if (e.target.tagName == "LI") {
            console.log(reviewItems);
            const targetItem = document.querySelector(e.target.dataset.target);
            console.log(targetItem);
            reviewItems.forEach((item) => {
                if (item == targetItem) {
                    item.classList.add("active-review");
                    } else {
                        item.classList.remove("active-review");
                    }
            })
            
        }
    })
});
	
	
	// // animation on scroll
	
	   
	
	const observer = new IntersectionObserver((entries) =>{
	    entries.forEach((entry) => {
	        console.log(entry)
	        if (entry.isIntersecting) {
	            entry.target.classList.add('show');
	        } else {
	            entry.target.classList.remove('show')
	        }
	    })
	});
	
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el))

    
    // // navigation bar 
    const navButton = document.querySelector('.nav_btn');
    const navigate = navButton.addEventListener('click', (e) => {

    const toBtn = e.target.classList
    toBtn.toggle('navbtnfocus');

    const toTargetLinks = e.target.parentElement.nextElementSibling.classList
    toTargetLinks.toggle('hiddenNavLinks');

    // const toNavBg = e.target.parentElement
    // toNavBg.style.back

    });
