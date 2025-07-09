import detroix from '../assets/Detroix.png'
import mainImg from '../assets/MainImg.png'
import puzzle from '../assets/Puzzle.png'
import plant from '../assets/Plant.png'
import maze from '../assets/Maze.png'
import date1 from '../assets/Date1.png'
import date2 from '../assets/Date2.png'
import date3 from '../assets/Date3.png'


function Main() {
    
    return (
        <main role='main' className="container-fluid">
            <NavButtons />
            <MainImg />
            <MainSection />
            <BottomSection />
        </main>
    )
}

function NavButtons() {

    return(
        <div className="row">
                <div className="col-1"></div>
                <div className="col-5">
                    <img src={detroix} alt="" className='img-fluid'/>
                </div>
                <div className="col-1"></div>

                <div className="col-2 d-flex navButtons pb-5">
                <button class="btn">HOME</button>
                <button class="btn">ABOUT</button>
                <button class="btn">SERVICES</button>
                <button class="btn">FAQS</button>
                <button class="btn">CONTACTS</button>
            </div>
        </div>
    )
}

function MainImg() {

    return(
        <section className='container-fluid'>
            <div className="row">
                <div className="col-12">
                    <img src={mainImg} alt="" className='mainImg img-fluid'/>
                </div>
            </div>

            <div className="row">
                <div className="col-12 text-center">
                    <button className='bullets'></button>
                    <button className='bullets'></button>
                    <button className='bullets'></button>
                </div>
            </div>
        </section>
        
    )
}
 
function MainSection() {

    return(
        <section className='container-fluid'>
            <div className="row">
                <div className="col-4 border-top border-end border-secondary">
                    <h2 className='fw-bold fs-1 ms-5'>SMART</h2>
                    <img src={puzzle} alt="" className='img-fluid ms-5'/>
                    <p className='ms-5 mt-4 text-secondary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae alias ea maiores repellat, incidunt possimus necessitatibus sint perferendis quis placeat, praesentium doloremque maxime voluptas sapiente eius quo eum quia vitae?</p>
                    <button className='btn ms-5'>MORE</button>
                </div>

                <div className="col-4 border-top border-end border-secondary">
                    <h2 className='fw-bold fs-1 ms-5'>STRONG</h2>
                    <img src={plant} alt="" className='img-fluid ms-5'/>
                    <p className='ms-5 mt-4 text-secondary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae alias ea maiores repellat, incidunt possimus necessitatibus sint perferendis quis placeat, praesentium doloremque maxime voluptas sapiente eius quo eum quia vitae?</p>
                    <button className='btn ms-5'>MORE</button>
                </div>

                <div className="col-4 border-top border-end border-secondary">
                    <h2 className='fw-bold fs-1 ms-5'>STABLE</h2>
                    <img src={maze} alt="" className='img-fluid ms-5'/>
                    <p className='ms-5 mt-4 text-secondary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae alias ea maiores repellat, incidunt possimus necessitatibus sint perferendis quis placeat, praesentium doloremque maxime voluptas sapiente eius quo eum quia vitae?</p>
                    <button className='btn ms-5'>MORE</button>
                </div>
            </div>
            <br />
        </section>
    )
}

function BottomSection() {

    return(
        <section className='container-fluid bottomMain'>
            <div className="row">
                <div className="col-4 ms-5 services">
                    <h3 className='text-light fw-bold ms-3'>SERVICES</h3>
                    <ul className='text-secondary pt-3'>
                        <li className='pb-3'>Lorem ipsum dolor sit amet.</li>
                        <li className='pb-3'>Lorem ipsum dolor sit amet.</li>
                        <li className='pb-3'>Lorem ipsum dolor sit amet.</li>
                        <li className='pb-3'>Lorem ipsum dolor sit amet.</li>
                        <li className='pb-3'>Lorem ipsum dolor sit amet.</li>
                        <li className='pb-3'>Lorem ipsum dolor sit amet.</li>
                        <li className='pb-3'>Lorem ipsum dolor sit amet.</li>
                        <li className='pb-3'>Lorem ipsum dolor sit amet.</li>
                    </ul>
                    <button class="btn bottomButton mt-3">MORE</button>
                </div>

                <div class="col-4 opportunities">
                    <h3 class="text-light fw-bold">OPPORTUNITIES</h3>
                    <br />
                    <ul class="text-secondary">
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                    <p class="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt nostrum impedit sapiente soluta. Quia nemo culpa ad libero saepe aliquam tenetur ab hic debitis dolores.</p>
                    <br />
                    <ul class="text-secondary">
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>    
                        <p class="text-secondary pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut? Consequatur adipisci laborum animi enim inventore, quo accusamus vitae rerum ipsum, tempore unde, perspiciatis nihil?</p>
                    <button class="btn bottomButton mt-5">MORE</button>
                </div>

                <div className="col-3">
                    <h3 className='fw-bold text-light'>NEWS</h3>
                    <br />
                    <div className="d-flex">
                        <img src={date1} alt="" />
                        <div>
                            <b class="text-light">Lorem ipsum dolor sit amet.</b>
                            <p class="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repellat suscipit distinctio.</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <img src={date2} alt="" />
                        <div>
                            <b class="text-light">Lorem ipsum dolor sit amet.</b>
                            <p class="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repellat suscipit distinctio.</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <img src={date3} alt="" />
                        <div>
                            <b class="text-light">Lorem ipsum dolor sit amet.</b>
                            <p class="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repellat suscipit distinctio.</p>
                        </div>
                    </div>

                    <button class="btn bottomButton mt-2">MORE</button>
                </div>
            </div>
        </section>
    )
}
export default Main