<template>
  <div>
    <banner></banner>
    
    <div class="main">
      <!--start: We believe everyone deserves access to energy storage-->
      <section class="weBelieve">
        <b-row class="w-100p t-left">
          <b-col xs="12" sm="12" md="12" lg="6" xl="6" class="left t-left b-DEF5FF">
            <b-row class="w-90p insider t-left">
              <p class="p1point5 c-4F9BC1 t-left" style="margin-bottom: 12px">OUR MISSION</p>
              <h2 class="h2point8 c-254B77 f-weight-400 m-l-0 p-l-0 t-left" style="margin-bottom: 50px">We believe everyone deserves access to energy storage</h2>
              <p class="p3 c-183B56 m-l-0 p-l-0 t-left">
                Energy storage is a powerful tool for resilience, savings, and control over energy usage. Until now, battery systems were designed for permanent installation at homes and businesses, but that leaves renters and residents of multi-unit buildings without options. Our mission is to change that.
              </p>
<!--              <button type="button" class="btn submit" onclick="window.location.href='../product'">-->
<!--                Learn more-->
<!--              </button>-->
                <router-link :to="{path: '/product'}" class="c-4F9BC1 routerLink t-right" target="_blank">
                  Learn More <font-awesome-icon icon="arrow-right" style="font-size: 16px; margin-bottom: -1px;"/>
                </router-link>
            </b-row>
          </b-col>
          <b-col xs="12" sm="12" md="12" lg="6" xl="6" class="right t-left b-254B77">
            <b-row class="w-90p insider t-left">
              <p class="p1point5 c-B0E7FF t-left" style="margin-bottom: 12px">OUR GOAL</p>
              <h2 class="h2point8 c-FFFFFF f-weight-400 m-l-0 p-l-0 t-left" style="margin-bottom: 50px">To provide more accessible energy savings</h2>
              <p class="p3 c-FFFFFF m-l-0 p-l-0 t-left">
                blip gives you access to electricity bill savings by storing energy when it is cheap. Other energy storage systems require professional installation, are designed only for homeowners, and cost five times more than blip.
                <br><br>
                With blip, those concerned about energy savings can finally access them, no matter where you live.
              </p>
            </b-row>
          </b-col>
        </b-row>
      </section>
      <!--end: We believe everyone deserves access to energy storage-->

      <!--start: We care deeply about our environment-->
      <section class="weCare b-FFFFFF i-a-c" v-if="ismOrpc === 'PCoperation'">
        <b-row class="insider w-90p">
          <b-col  xs="12" sm="12" md="6" lg="6" xl="6" class="leftImg p-l-0">
            <img src="../../assets/webPages/about/SplitIllustration.png" alt="" class="">
          </b-col>
          <b-col  xs="12" sm="12" md="6" lg="6" xl="6" class="rightText t-left">
            <p class="p1point5 c-4F9BC1" style="margin-bottom: 12px">SUSTAINABILITY</p>
            <h2 class="h2point8 c-254B77 f-weight-400 m-l-0 p-l-0" style="margin-bottom: 50px">We care deeply about our environment</h2>
            <p class="p3 c-183B56 m-l-0 p-l-0">
              blip is designed to keep dirty power plants offline by shifting your energy usage.
            </p>
          </b-col>
        </b-row>
      </section>
      <section class="weCare b-FFFFFF i-a-c"  v-if="ismOrpc === 'Moperation'">
        <b-row class="insider w-90p">
          <b-col  xs="12" sm="12" md="10" offset-md="1" lg="6" offset-lg="0" xl="6" offset-xl="0" class="rightText t-left">
            <p class="p1point5 c-4F9BC1" style="margin-bottom: 12px">SUSTAINABILITY</p>
            <h2 class="h2point8 c-254B77 f-weight-400 m-l-0 p-l-0" style="margin-bottom: 50px">We care deeply about our environment</h2>
            <p class="p3 c-183B56 m-l-0 p-l-0">
              blip is designed to keep dirty power plants offline by shifting your energy usage.
            </p>
          </b-col>
          <b-col  xs="12" sm="12" md="8" offset-md="2" lg="6" offset-lg="0" xl="6" offset-xl="0" class="leftImg p-l-0">
            <img src="../../assets/webPages/about/SplitIllustration.png" alt="" class="">
          </b-col>
        </b-row>
      </section>
      <!--end: We care deeply about our environment-->

      <!--start: We’ve been busy making waves with our big ideas-->
      <section class="weVe b-FFFFFF i-a-c">
        <b-row class="w-85p insider">
          <b-col xs="12" sm="12" md="10" lg="8" xl="6" class="leftText t-left">
            <p class="p1point5 c-4F9BC1" style="margin-bottom: 12px">WHAT WE’VE BEEN UP TO</p>
            <h2 class="h2point8 c-254B77 f-weight-400 t-left m-l-0 p-l-0 w-100p" style="margin-bottom: 50px">We’ve been busy making waves with our big ideas</h2>
          </b-col>
          <b-col xs="12" sm="12" md="2" lg="4" xl="6" class="rightBlc t-left">
          </b-col>
        </b-row>
      </section>
      <section class="weVeBeen b-FFFFFF i-a-c">
        <b-row class="w-85p insider">
          <b-row class="topline" style="width: 100%">
            <b-col xs="4" sm="4" md="4" lg="4" xl="4" class="leftImg t-center Forbes" style="">
              <!--              <img src="../../assets/webPages/about/websiteTraction/ASUio.jpg" alt="" style="width: 30%">-->
            </b-col>
            <b-col xs="8" sm="8" md="8" lg="8" xl="8" class="rightTxt t-left">
              <a href="https://www.forbes.com/30-under-30/2022/energy" target="_blank">
                <p class="p1point5 c-254B77 t-left">Forbes 30 under 30</p>
              </a>
              <p class="p3 c-4F9BC1 t-left m-l-0">
                Honoree of the 2022 Forbes 30 under 30 List for Energy
              </p>
            </b-col>
          </b-row>
          <b-row class="topline" style="width: 100%">
            <b-col xs="4" sm="4" md="4" lg="4" xl="4" class="leftImg t-center ASUio" style="">
<!--              <img src="../../assets/webPages/about/websiteTraction/ASUio.jpg" alt="" style="width: 30%">-->
            </b-col>
            <b-col xs="8" sm="8" md="8" lg="8" xl="8" class="rightTxt t-left">
              <a href="https://fullcircle.asu.edu/fulton-schools/imaginative-solutions-lead-the-way-at-asu-innovation-open/" target="_blank">
                <p class="p1point5 c-254B77 t-left">ASUio</p>
              </a>
              <p class="p3 c-4F9BC1 t-left m-l-0">
                Finalist and Winner of the Climate Change Prize Sponsored by Breakthrough Energy Ventures
              </p>
            </b-col>
          </b-row>
          <b-row class="topline" style="width: 100%">
            <b-col xs="4" sm="4" md="4" lg="4" xl="4" class="leftImg t-center VentureCat" style="">
<!--              <img src="../../assets/webPages/about/websiteTraction/Venturecat.png" alt="" style="width: 80%; height: auto">-->
            </b-col>
            <b-col xs="8" sm="8" md="8" lg="8" xl="8" class="rightTxt t-left">
              <a href="https://blogs.kellogg.northwestern.edu/inside/2021/05/21/venturecat-semi-finalist-post-two/" target="_blank">
                <p class="p1point5 c-254B77 t-left">VentureCat</p>
              </a>
              <p class="p3 c-4F9BC1 t-left m-l-0">
                Finalist and Winner of the Energy and Sustainability Track
              </p>
            </b-col>
          </b-row>
          <b-row class="topline" style="width: 100%">
            <b-col xs="4" sm="4" md="4" lg="4" xl="4" class="leftImg t-center Rice" style="">
<!--              <img src="../../assets/webPages/about/websiteTraction/RBPC.jpg" alt="" style="width: 70%;">-->
            </b-col>
            <b-col xs="8" sm="8" md="8" lg="8" xl="8" class="rightTxt t-left">
              <a href="https://rbpc.rice.edu/2021-Competition/2021-startups" target="_blank">
                <p class="p1point5 c-254B77 t-left">Rice Business Plan Competition</p>
              </a>
              <p class="p3 c-4F9BC1 t-left m-l-0">
                Finalist
              </p>
            </b-col>
          </b-row>
          <b-row class="topline" style="width: 100%">
            <b-col xs="4" sm="4" md="4" lg="4" xl="4" class="leftImg t-center Amazon" style="">
<!--              <img src="../../assets/webPages/about/websiteTraction/AWS.png" alt="" style="width: 50%;">-->
            </b-col>
            <b-col xs="8" sm="8" md="8" lg="8" xl="8" class="rightTxt t-left">
              <a href="https://aws.amazon.com/blogs/startups/meet-the-winners-of-the-2020-aws-u-s-university-startup-competition/" target="_blank">
                <p class="p1point5 c-254B77 t-left">Amazon AWS Startup Challenge</p>
              </a>
              <p class="p3 c-4F9BC1 t-left m-l-0">
                Finalist
              </p>
            </b-col>
          </b-row>
<!--          <b-row class="topline" style="width: 100%">-->
<!--            <b-col xs="4" sm="4" md="4" lg="4" xl="4" class="leftImg t-center Baylor" style="">-->
<!--&lt;!&ndash;              <img src="../../assets/webPages/about/websiteTraction/Baylor.png" alt="" style="width: 70%;">&ndash;&gt;-->
<!--            </b-col>-->
<!--            <b-col xs="8" sm="8" md="8" lg="8" xl="8" class="rightTxt t-left">-->
<!--              <a href="">-->
<!--                <p class="p1point5 c-254B77 t-left">Baylor New Venture Competition</p>-->
<!--              </a>-->
<!--              <p class="p3 c-4F9BC1 t-left m-l-0">-->
<!--                SEMI-Finalist-->
<!--              </p>-->
<!--            </b-col>-->
<!--          </b-row>-->
          <b-row class="topline bottomLine" style="width: 100%">
            <b-col xs="4" sm="4" md="4" lg="4" xl="4" class="leftImg t-center Chicago" style="">
<!--              <img src="../../assets/webPages/about/websiteTraction/CSW.png" alt="" style="width: 70%;">-->
            </b-col>
            <b-col xs="8" sm="8" md="8" lg="8" xl="8" class="rightTxt t-left">
              <a href="https://www.technewsiit.com/chicago-startup-week-announces-return-2021" target="_blank">
                <p class="p1point5 c-254B77 t-left">Chicago Startup Week Pitch Competition</p>
              </a>
              <p class="p3 c-4F9BC1 t-left m-l-0">
                Finalist
              </p>
            </b-col>
          </b-row>
<!--          <b-row class="topline" style="width: 100%">-->
<!--            <b-col xs="4" sm="4" md="4" lg="4" xl="4" class="leftImg t-center Alphagear" style="">-->
<!--&lt;!&ndash;              <img src="../../assets/webPages/about/websiteTraction/AlphaLab_HardwareCup.png" alt="" style="width: 70%;">&ndash;&gt;-->
<!--            </b-col>-->
<!--            <b-col xs="8" sm="8" md="8" lg="8" xl="8" class="rightTxt t-left">-->
<!--              <a href="">-->
<!--                <p class="p1point5 c-254B77 t-left">Alphagear Lab Hardware Cup</p>-->
<!--              </a>-->
<!--              <p class="p3 c-4F9BC1 t-left m-l-0">-->
<!--                Semi-finalist Smart Homes/Connected Devices-->
<!--              </p>-->
<!--            </b-col>-->
<!--          </b-row>-->
<!--          <b-row class="topline bottomLine" style="width: 100%">-->
<!--            <b-col xs="4" sm="4" md="4" lg="4" xl="4" class="leftImg t-center KelloggV" style="">-->
<!--&lt;!&ndash;              <img src="../../assets/webPages/about/websiteTraction/KelloggVentureChallenge.png" alt="" style="width: 60%;">&ndash;&gt;-->
<!--            </b-col>-->
<!--            <b-col xs="8" sm="8" md="8" lg="8" xl="8" class="rightTxt t-left">-->
<!--              <a href="">-->
<!--                <p class="p1point5 c-254B77 t-left">Kellogg Venture Challenge</p>-->
<!--              </a>-->
<!--              <p class="p3 c-4F9BC1 t-left m-l-0">-->
<!--                Finalist-->
<!--              </p>-->
<!--            </b-col>-->
<!--          </b-row>-->
        </b-row>
      </section>
      <!--end: We’ve been busy making waves with our big ideas-->

      <!--start: Meet the team-->
<!--      <section class="meet b-254B77 i-a-c t-center">-->
<!--        <b-row class="w-85p insider t-center">-->
<!--          <b-col  xs="12" sm="12" md="8" lg="7" xl="6" class="leftText t-left">-->
<!--            <p class="p1point5 c-B0E7FF" style="margin-bottom: 12px">WHO WE ARE</p>-->
<!--            <h2 class="h2point8 c-FFFFFF f-weight-400 m-l-0 p-l-0" style="margin-bottom: 50px">Meet the team</h2>-->
<!--            <p class="p2 c-FFFFFF m-l-0 p-l-0">-->
<!--              We are passionate about limiting our collective impact on the environment.-->
<!--            </p>-->
<!--          </b-col>-->
<!--          <b-col  xs="12" sm="12" md="4" lg="5" xl="6" class="rightblc p-l-0">-->
<!--          </b-col>-->
<!--        </b-row>-->
<!--      </section>-->
<!--      <section class="meetThe b-254B77 i-a-c t-center" v-if="ismOrpc === 'PCoperation'">-->
<!--        <b-row class="w-90p insider t-center">-->
<!--          <div class="content w-100p">-->
<!--            <div class="row" style="width: 100%">-->
<!--              <div class="col-lg-4 col-md-12 col-sm-12">-->
<!--                <div class="card-f flex text-center wow fadeInUp">-->
<!--                  <div class="card-f-heading">-->
<!--                    <img src="../../assets/webPages/about/team/ovalSophia.png" alt="" class="members">-->
<!--                  </div>-->
<!--                  <div class="card-f-body t-center">-->
<!--                    <p class="p2 c-FFFFFF t-center">Sophia Wennstedt</p>-->
<!--                    <p class="p3 c-FFFFFF t-center">Co-Founder & CEO</p>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="col-lg-8 col-md-12 col-sm-12 rightOval b-B0E7FF t-left">-->
<!--                <p class="rightTxt p2 c-254B77 absolute-mid i-a-c">-->
<!--                  Sophia brings a technical background and a vision to bring energy storage to anyone. After receiving a degree in Mechanical Engineering from Harvard University Sophia worked at iRobot as a Mech. Engineer on Roomba new product development and as a program manager for the Design and User Experience group before enrolling in Northwestern's MMM program to receive an MBA and MSDI. During the program, she worked as an Entrepreneurial Fellow at Exelon (summer 2020) and took an 8 month position as Product Manager at Tesla for digital energy products.-->
<!--                </p>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="row" style="width: 100%">-->
<!--              <div class="col-lg-8 col-md-12 col-sm-12 leftOval b-B0E7FF t-left">-->
<!--                <p class="leftTxt p2 c-254B77 absolute-mid i-a-c">-->
<!--                  Chance is an accomplished Strategy and Operations Leader with over 14 years of experience in cross-functional leadership and operations management roles. He utilized his Lafayette College Political Science degree working for GE Federal Government Relations specializing in energy legislative and regulatory policy and advocacy. A UNC Kenan-Flagler MBA in Management Consulting & Sustainable Enterprise led to his work at ScottMadden specializing in energy and utility strategic project implementation. While at Northwestern University, in the MS in Leadership for Creative Enterprises & Entrepreneurship program, he met the co-founding team and launched the company.-->
<!--                </p>-->
<!--              </div>-->
<!--              <div class="col-lg-4 col-md-12 col-sm-12">-->
<!--                <div class="card-f flex text-center wow fadeInUp">-->
<!--                  <div class="card-f-heading">-->
<!--                    <img src="../../assets/webPages/about/team/ovalChance.png" alt="" class="members">-->
<!--                  </div>-->
<!--                  <div class="card-f-body">-->
<!--                    <p class="p2 c-FFFFFF t-center">Chance Cobb</p>-->
<!--                    <p class="p3 c-FFFFFF t-center">Co-Founder & COO</p>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="row" style="width: 100%">-->
<!--              <div class="col-lg-4 col-md-12 col-sm-12">-->
<!--                <div class="card-f flex text-center wow fadeInUp">-->
<!--                  <div class="card-f-heading">-->
<!--                    <img src="../../assets/webPages/about/team/ovalDennis.png" alt="" class="members">-->
<!--                  </div>-->
<!--                  <div class="card-f-body">-->
<!--                    <p class="p2 c-FFFFFF t-center">Dennis Kontorovich</p>-->
<!--                    <p class="p3 c-FFFFFF t-center">Co-Founder & Advisor</p>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="col-lg-8 col-md-12 col-sm-12 rightOval b-B0E7FF t-left">-->
<!--                <p class="rightTxt p2 c-254B77 absolute-mid i-a-c">-->
<!--                  As part of the original Cofounding team, Dennis was responsible for sculpting blip's business plan. Dennis built out blip's financial model, leveraging his undergraduate degree in Finance from Miami University and MBA from Northwestern's Kellogg School of Management. Dennis brings experience in management consulting at Bain, an externship at Engie Distributed Solar, and Entrepreneurial Fellow position at Exelon.-->
<!--                </p>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="row" style="width: 100%">-->
<!--              <div class="col-lg-8 col-md-12 col-sm-12 leftOval b-B0E7FF t-left">-->
<!--                <p class="leftTxt p2 c-254B77 absolute-mid i-a-c">-->
<!--                  Part of the original cofounding team, Thibaut drove prototype development and technical specifications and brings a meticulous eye for detail. Thibaut earned a masters in Electrical engineering as well as an MBA from Northwestern, and has worked in energy consulting at BCG. Currently based in Belgium, Thibaut remains our electrical guru and sounding board on a part-time basis.-->
<!--                </p>-->
<!--              </div>-->
<!--              <div class="col-lg-4 col-md-12 col-sm-12">-->
<!--                <div class="card-f flex text-center wow fadeInUp">-->
<!--                  <div class="card-f-heading">-->
<!--                    <img src="../../assets/webPages/about/team/ovalThibaut.png" alt="" class="members">-->
<!--                  </div>-->
<!--                  <div class="card-f-body">-->
<!--                    <p class="p2 c-FFFFFF t-center">Thibaut Feremans</p>-->
<!--                    <p class="p3 c-FFFFFF t-center">Co-Founder & Advisor</p>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <b-row class="t-center">-->
<!--            <button type="button" class="button submit" onclick="window.open('../contact-us')">-->
<!--              &lt;!&ndash;                      <a href="./contact-us" class="btn btn-primary">&ndash;&gt;-->
<!--              Contact Us-->
<!--              &lt;!&ndash;                        </a>&ndash;&gt;-->
<!--            </button>-->
<!--          </b-row>-->
<!--        </b-row>-->
<!--      </section>-->
<!--      <section class="meetTheM b-254B77 i-a-c t-center"  v-if="ismOrpc === 'Moperation'">-->
<!--        <b-row class="w-90p insider t-center">-->
<!--          <div class="content w-100p">-->
<!--            <div class="row" style="width: 100%">-->
<!--              <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12 col-sm-12">-->
<!--                <div class="card-f flex text-center wow fadeInUp">-->
<!--                  <div class="card-f-heading">-->
<!--                    <img src="../../assets/webPages/about/team/ovalSophia.png" alt="" class="members">-->
<!--                  </div>-->
<!--                  <div class="card-f-body t-center">-->
<!--                    <p class="p2 c-254B77 t-center">Sophia Wennstedt</p>-->
<!--                    <p class="p3 c-254B77 t-center">Co-Founder & CEO</p>-->
<!--                    <p class="p2 c-254B77 t-left w-80p bio">-->
<!--                      Sophia brings a technical background and a vision to bring energy storage to anyone. After receiving a degree in Mechanical Engineering from Harvard University Sophia worked at iRobot as a Mech. Engineer on Roomba new product development and as a program manager for the Design and User Experience group before enrolling in Northwestern's MMM program to receive an MBA and MSDI. During the program, she worked as an Entrepreneurial Fellow at Exelon (summer 2020) and took an 8 month position as Product Manager at Tesla for digital energy products.-->
<!--                    </p>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--&lt;!&ndash;              <div class="col-lg-8 col-md-12 col-sm-12 rightOval b-B0E7FF t-left">&ndash;&gt;-->
<!--&lt;!&ndash;                <p class="rightTxt p2 c-254B77 absolute-mid i-a-c">&ndash;&gt;-->
<!--&lt;!&ndash;                  Sophia brings a technical background and a vision to bring energy storage to anyone. After receiving a degree in Mechanical Engineering from Harvard University Sophia worked at iRobot as a Mech. Engineer on Roomba new product development and as a program manager for the Design and User Experience group before enrolling in Northwestern's MMM program to receive an MBA and MSDI. During the program, she worked as an Entrepreneurial Fellow at Exelon (summer 2020) and took an 8 month position as Product Manager at Tesla for digital energy products.&ndash;&gt;-->
<!--&lt;!&ndash;                </p>&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->
<!--            </div>-->
<!--            <div class="row" style="width: 100%">-->
<!--              <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12 col-sm-12">-->
<!--                <div class="card-f flex text-center wow fadeInUp">-->
<!--                  <div class="card-f-heading">-->
<!--                    <img src="../../assets/webPages/about/team/ovalChance.png" alt="" class="members">-->
<!--                  </div>-->
<!--                  <div class="card-f-body">-->
<!--                    <p class="p2 c-254B77 t-center">Chance Cobb</p>-->
<!--                    <p class="p3 c-254B77 t-center">Co-Founder & COO</p>-->
<!--                    <p class="p2 c-254B77 t-left w-80p bio">-->
<!--                      Chance is an accomplished Strategy and Operations Leader with over 14 years of experience in cross-functional leadership and operations management roles. He utilized his Lafayette College Political Science degree working for GE Federal Government Relations specializing in energy legislative and regulatory policy and advocacy. A UNC Kenan-Flagler MBA in Management Consulting & Sustainable Enterprise led to his work at ScottMadden specializing in energy and utility strategic project implementation. While at Northwestern University, in the MS in Leadership for Creative Enterprises & Entrepreneurship program, he met the co-founding team and launched the company.-->
<!--                    </p>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--&lt;!&ndash;              <div class="col-lg-8 col-md-12 col-sm-12 leftOval b-B0E7FF t-left">&ndash;&gt;-->
<!--&lt;!&ndash;                <p class="leftTxt p2 c-254B77 absolute-mid i-a-c">&ndash;&gt;-->
<!--&lt;!&ndash;                  Chance is an accomplished Strategy and Operations Leader with over 14 years of experience in cross-functional leadership and operations management roles. He utilized his Lafayette College Political Science degree working for GE Federal Government Relations specializing in energy legislative and regulatory policy and advocacy. A UNC Kenan-Flagler MBA in Management Consulting & Sustainable Enterprise led to his work at ScottMadden specializing in energy and utility strategic project implementation. While at Northwestern University, in the MS in Leadership for Creative Enterprises & Entrepreneurship program, he met the co-founding team and launched the company.&ndash;&gt;-->
<!--&lt;!&ndash;                </p>&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->
<!--            </div>-->
<!--            <div class="row" style="width: 100%">-->
<!--              <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1  col-md-12 col-sm-12">-->
<!--                <div class="card-f flex text-center wow fadeInUp">-->
<!--                  <div class="card-f-heading">-->
<!--                    <img src="../../assets/webPages/about/team/ovalDennis.png" alt="" class="members">-->
<!--                  </div>-->
<!--                  <div class="card-f-body">-->
<!--                    <p class="p2 c-254B77 t-center">Dennis Kontorovich</p>-->
<!--                    <p class="p3 c-254B77 t-center">Co-Founder & Advisor</p>-->
<!--                    <p class="p2 c-254B77 t-left w-80p bio">-->
<!--                      As part of the original Cofounding team, Dennis was responsible for sculpting blip's business plan. Dennis built out blip's financial model, leveraging his undergraduate degree in Finance from Miami University and MBA from Northwestern's Kellogg School of Management. Dennis brings experience in management consulting at Bain, an externship at Engie Distributed Solar, and Entrepreneurial Fellow position at Exelon.-->
<!--                    </p>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--&lt;!&ndash;              <div class="col-lg-8 col-md-12 col-sm-12 rightOval b-B0E7FF t-left">&ndash;&gt;-->
<!--&lt;!&ndash;                <p class="rightTxt p2 c-254B77 absolute-mid i-a-c">&ndash;&gt;-->
<!--&lt;!&ndash;                  As part of the original Cofounding team, Dennis was responsible for sculpting blip's business plan. Dennis built out blip's financial model, leveraging his undergraduate degree in Finance from Miami University and MBA from Northwestern's Kellogg School of Management. Dennis brings experience in management consulting at Bain, an externship at Engie Distributed Solar, and Entrepreneurial Fellow position at Exelon.&ndash;&gt;-->
<!--&lt;!&ndash;                </p>&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->
<!--            </div>-->
<!--            <div class="row" style="width: 100%">-->
<!--              <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12 col-sm-12">-->
<!--                <div class="card-f flex text-center wow fadeInUp">-->
<!--                  <div class="card-f-heading">-->
<!--                    <img src="../../assets/webPages/about/team/ovalThibaut.png" alt="" class="members">-->
<!--                  </div>-->
<!--                  <div class="card-f-body">-->
<!--                    <p class="p2 c-254B77 t-center">Thibaut Feremans</p>-->
<!--                    <p class="p3 c-254B77 t-center">Co-Founder & Advisor</p>-->
<!--                    <p class="p2 c-254B77 t-left w-80p bio">-->
<!--                      Part of the original cofounding team, Thibaut drove prototype development and technical specifications and brings a meticulous eye for detail. Thibaut earned a masters in Electrical engineering as well as an MBA from Northwestern, and has worked in energy consulting at BCG. Currently based in Belgium, Thibaut remains our electrical guru and sounding board on a part-time basis.-->
<!--                    </p>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--&lt;!&ndash;              <div class="col-lg-8 col-md-12 col-sm-12 leftOval b-B0E7FF t-left">&ndash;&gt;-->
<!--&lt;!&ndash;                <p class="leftTxt p2 c-254B77 absolute-mid i-a-c">&ndash;&gt;-->
<!--&lt;!&ndash;                  Part of the original cofounding team, Thibaut drove prototype development and technical specifications and brings a meticulous eye for detail. Thibaut earned a masters in Electrical engineering as well as an MBA from Northwestern, and has worked in energy consulting at BCG. Currently based in Belgium, Thibaut remains our electrical guru and sounding board on a part-time basis.&ndash;&gt;-->
<!--&lt;!&ndash;                </p>&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->
<!--            </div>-->
<!--          </div>-->
<!--          <b-row class="t-center">-->
<!--            <button type="button" class="button submit" onclick="window.open('../contact-us')">-->
<!--              &lt;!&ndash;                      <a href="./contact-us" class="btn btn-primary">&ndash;&gt;-->
<!--              Contact Us-->
<!--              &lt;!&ndash;                        </a>&ndash;&gt;-->
<!--            </button>-->
<!--          </b-row>-->
<!--        </b-row>-->
<!--      </section>-->
      <!--end: Meet the team-->

<!--      <p>-->
<!--        Click <a href="#" @click.prevent="disableTracking">here</a>,-->
<!--        to disable the tracking through Google Analytics.-->
<!--      </p>-->
<!--      <KlaviyoSignUp :formID="formID"></KlaviyoSignUp>-->
<!--      <KlaviyoSignUp></KlaviyoSignUp>-->
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import banner from "./../shared/components/bannerII.vue";
import bannerPreorder from "./../shared/components/bannerPreorder.vue";
import KlaviyoSignUp from "./../shared/components/FooterIIISignUpKlaviyo.vue";
// import Footer from "./../shared/components/FooterIIWOSignUp.vue";
import Footer from "./../shared/components/FooterII.vue";

export default {
  name: "about",
  data() {
    return {
      formID: "email_signup_about",
      ismOrpc: '',
      clientWidth:document.body.clientWidth,
      isPC: true
    };
  },
  computed:{
    // width: function(){
    //   return document.body.clientWidth
    // }
  },
  head() {
    return {
      title: 'About Page',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'about',
          name: 'about',
          content: 'Everyone deserves access to energy storage, so we’re building blipOne - the world’s most accessible smart home battery. Compact, portable and affordable with a modern design.'
        }
      ]
    }
  },
  mounted() {
    this.$ga.page('/about');

    // let that = this;
    // window.onresize =() =>{
    //   return (()=>{
    //     window.clientWidth = document.body.clientWidth;
    //     that.clientWidth = window.clientWidth;
    //   })()
    // };
  },
  watch:{
    // clientWidth:{
    //   handler (newVal, oldVal){
    //     console.log('kkkkk',newVal)
    //     if( (newVal >= 1100 && oldVal < 1100) ){
    //       // alert('jjjj')
    //       // this.reload()
    //       // this.ismOrpc = 'PCoperation'
    //       // this.$forceUpdate()
    //       // this.$router.go(0);
    //       // location.reload(true)
    //       this.isPC = true
    //     }else{
    //       this.isPC = false
    //     }
    //   },
    // },
  },
  created(){
    if (this._isMobile() || this.isUnderXL()) {
      //mobile
      this.ismOrpc = 'Moperation'
      //set rem
      // window.onload = function(){
      //   this.getRem(750,100)
      // };
      // window.onresize = function(){
      //   this.getRem(750,100)
      // };
    } else {
      //pc
      this.ismOrpc = 'PCoperation'
    }
  },
  methods: {
    disableTracking: function() {
      this.$ga.disable();
      alert('Tracking disabled');
    },
    click: function() {
      this.$ga.event('category', 'action', 'label', 123)
    },
    getRem(pwidth,prem){
      var html = document.getElementsByTagName("html")[0];
      var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
      html.style.fontSize = oWidth/pwidth*prem + "px";
    },
    _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    },
    isUnderXL(){
      if (document.body.clientWidth < 1200){
        return true
      }
      return false
    },
  },
  components: {
    banner,
    // transparentBanner,
    bannerPreorder,
    // FontAwesomeIcon,
    KlaviyoSignUp,
    Footer
  }
};
</script>

<style lang="scss" scoped>
@import "src/scss/pages/common";
@import "src/scss/pages/aboutIII";
</style>


