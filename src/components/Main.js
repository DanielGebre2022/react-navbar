import React from 'react';


export default function Main() {
    return (
        <div class="container">
            <div className="collage">
                <div className="item item-1">
                    <img className="chicken" src={require("./chicken.jpg")}></img>
                </div>
                <div className="item item-2">
                    <img className="lasagna" src={require("./lasagna.jpg")}></img>
                </div>
                <div className="item item-3">
                    <img className="nachos" src={require("./nachos.jpg")}></img>
                </div>
                <div className="item item-4">
                    <img className="shortRibs" src={require("./gb_2005-110.jpeg")}></img>
                </div>
                <div className="item item-5">
                    <h3 className="item-5-text">EXPERIENCE</h3>
                    <h3 className="item-5-text">S1</h3>
                    <button type="button" class="btn btn-light experience">EXPLORE</button>
                </div>
            </div>
            <div className="underMain">
                <div className="underMainPic">
                    <img className="boxLunchPic" src={require("./box-lunch.jpg")}></img>
                </div>
                <div className="underMainText">
                    <h2 className="underMainTitle">Premier Catering</h2>
                    <p className="underMainP">Lorem ipsum dolor sit amet. Et aliquid molestias hic dignissimos obcaecati est optio assumenda? Nam delectus nihil ea molestiae magni et obcaecati molestiae est ipsum dolor qui officia quia ad pariatur porro. Quo quisquam esse qui minima voluptas est iusto vero. Et ratione delectus eum nemo doloribus et labore laborum ea amet blanditiis! Id porro error est Quis dicta eum sint sequi. Nam blanditiis dolor aut sapiente mollitia ut reprehenderit assumenda. Ex internos quia ut aspernatur quisquam qui molestiae voluptate ut pariatur adipisci At libero amet vel magni inventore. Sit quasi mollitia eos ullam minus qui architecto adipisci. Sed tempore nobis qui dolores sunt est quam dolores aut rerum deserunt et aspernatur molestiae quo quam iste.</p>

                </div>

            </div>
            <div className="threeCards">
                <div className="blueCard card">
                    <h4 className="blueCardTitle">Delicous Food</h4>
                    <p className="blueCardText">Lorem ipsum dolor sit amet. Ad dolorem doloribus 33 soluta laborum vel natus tempora et repudiandae nulla. Ab assumenda quia hic i </p>
                </div>
                <div className="orangeCard card">
                    <h4 className="orangeCardTitle"> Beautiful Presentation</h4>
                    <p className="orangeCardText">Lorem ipsum dolor sit amet. Ad dolorem doloribus 33 soluta laborum vel natus tempora et repudiandae nulla. Ab as</p>
                </div>
                <div className="pinkCard card">
                    <h4 className="pinkCardTitle"> Wonderful Experience</h4>
                    <p className="pinkCardText">Lorem ipsum dolor sit amet. Ad dolorem doloribus 33 soluta laborum vel natus tempora et repudiandae nulla. Ab assumenda quia hic ipsum quia et earum tempore e</p>
                </div>

            </div>
            <div className="underCard">
                <img className="bottomImage"  src={require("./enhanceschick.jpg")}></img>
            </div>
            <div className="description">
                <h1 className="descriptionTitle">Our Catering Services</h1>
                <p className="descriptionText">Lorem ipsum dolor sit amet. Quia impedit est praesentium dolores 33 dolorem temporibus ut modi magni. Deserunt perferendis qui saepe ducimus et reiciendis ipsa ut deleniti omnis. Et debitis reiciendis et tempore delectus et Quis Quis quo debitis doloremque et nemo dicta qui quia quia qui dolor amet. Quo veritatis quasi in accusamus optio eum nihil similique. Non ipsum quia ex adipisci nihil est quos nulla ut dolores officia est culpa minus quo rerum maxime in officiis voluptates. Et nemo deleniti in galisum nesciunt et sunt veritatis sed exercitationem molestiae non dolorum autem sit pariatur dolore aut ipsam laborum. Hic delectus architecto aut nostrum numquam et modi atque aut quae nostrum qui quas dicta aut voluptatum dignissimos. Et quia iusto ea dolor adipisci sed inventore sapiente quo doloremque eveniet et itaque voluptatem. Est possimus enim non ipsam beatae hic voluptas molestias et quam quis eos dolores iste! Et suscipit tempore et quia consectetur est consectetur nobis qui sequi iure cum sunt consectetur. Quo facere adipisci ut mollitia mollitia ad facere placeat eum dolor facere ex sequi expedita. Eum odit velit aut quod explicabo ut molestiae sapiente. A cupiditate nobis nam amet temporibus sit rerum exercitationem sed quia rerum vel provident soluta. Nam magnam error et numquam saepe ut voluptatem excepturi nam iure rerum ea quos et voluptatem enim.</p>
            </div>

        </div>
    )
}