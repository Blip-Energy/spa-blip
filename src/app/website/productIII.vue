<template>
  <div  style="background: #FFFFFF">
    <banner></banner>
    
    <div class="main">
      <!--start: No matter where you live-->
      <section class="noMatter b-FFFFFF i-a-c" v-if="ismOrpc === 'PCoperation'">
<!--        <b-row class="w-90p insiderBG"></b-row>-->
        <b-row class="w-80p insider">
          <b-col  xs="12" sm="12" md="12" lg="12" xl="6" class="leftText t-left p-l-0">
            <p class="p1point5 c-4F9BC1" style="margin-bottom: 12px">BACKUP POWER</p>
            <h2 class="h2point8 c-254B77 f-weight-400 m-l-0 p-l-0" style="margin-bottom: 50px">No matter where you live</h2>
            <p class="p3 c-183B56 m-l-0 p-l-0">
              We’re on a mission to create the most accessible smart home battery. Our first product, blipOne, plugs straight into a standard outlet with no installation necessary and provides 2.2KWh of backup power in case of an outage - enough to keep your fridge running for 1-2 days or the Wi-fi up for weeks.
              <br><br>
              Today, backup power products are expensive and often require permanent installation. We designed our product to work for anyone, even renters in apartments and those who live in condos or multi-unit buildings.
            </p>
            <a href="https://www.indiegogo.com/project/preview/17de3d24" target="_blank">
              <button type="button" class="btn submit b-254B77">
                Pre-order Now
              </button>
            </a>
          </b-col>
          <b-col  xs="12" sm="12" md="12" lg="8" offset-lg="2" xl="6" offset-xl="0" class="rightImg p-l-0">
            <!--            <img src="../../assets/webPages/product/blip-savings-calculator-graphic-F-05.png" alt="" class="">-->
            <div class="inRightVideo">
              <iframe class="leftVideo p-l-0" src="https://www.youtube.com/embed/a0svSyRffJY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </b-col>
        </b-row>
      </section>
      <section class="noMatterM i-a-c" v-if="ismOrpc === 'Moperation'">
        <b-row class="w-80p insider">
          <b-col  xs="12" sm="12" md="12" lg="12" xl="6" class="leftText t-left p-l-0">
            <p class="p1point5 c-4F9BC1" style="margin-bottom: 12px">BACKUP POWER</p>
            <h2 class="h2point8 c-254B77 f-weight-400 m-l-0 p-l-0" style="margin-bottom: 50px">No matter where you live</h2>
            <p class="p3 c-183B56 m-l-0 p-l-0">
              We’re on a mission to create the most accessible smart home battery. Our first product, blipOne, plugs straight into a standard outlet with no installation necessary and provides 2.2KWh of backup power in case of an outage - enough to keep your fridge running for 1-2 days or the Wi-fi up for weeks.
              <br><br>
              Today, backup power products are expensive and often require permanent installation. We designed our product to work for anyone, even renters in apartments and those who live in condos or multi-unit buildings.
            </p>
            <a href="https://www.indiegogo.com/project/preview/17de3d24" target="_blank">
              <button type="button" class="btn submit b-254B77">
                Pre-order Now
              </button>
            </a>
          </b-col>
          <b-col  xs="12" sm="12" md="12" lg="12" xl="6" class="rightImg">
            <!--            <img src="../../assets/webPages/product/blip-savings-calculator-graphic-F-05.png" alt="" class="">-->
            <div class="inRightVideo m-l-0">
              <iframe class="leftVideo p-l-0" src="https://www.youtube.com/embed/a0svSyRffJY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </b-col>
        </b-row>
      </section>
      <!--end: No matter where you live-->

      <!--start: Designed with you in mind-->
      <section class="designed b-FFFFFF i-a-c">
        <b-row class="w-80p insider">
          <b-col  xs="12" sm="12" md="12" lg="12" xl="6" class="leftText t-left p-l-0">
            <p class="p1point5 c-4F9BC1" style="margin-bottom: 12px">WHY CHOOSE BLIP?</p>
            <h2 class="h2point8 c-254B77 f-weight-400 t-left m-l-0 p-l-0 w-100p" style="margin-bottom: 50px">Designed with you in mind</h2>
          </b-col>
          <b-col  xs="12" sm="12" md="12" lg="12" xl="6" class="rightBlc t-left">
          </b-col>
<!--          <b-row class="pic w-100p">-->
<!--            <b-col xs="3" sm="3" md="3" lg="3" xl="3" class="t-center oneQuarter" style="padding-top: 2%">-->
<!--              <img src="../../assets/webPages/product/Vector1.png" style="width: 16%;">-->
<!--            </b-col>-->
<!--            <b-col xs="3" sm="3" md="3" lg="3" xl="3" class="t-center oneQuarter" style="padding-top: 1.8%">-->
<!--              <img src="../../assets/webPages/product/Vector2.png" style="width: 27%">-->
<!--            </b-col>-->
<!--            <b-col xs="3" sm="3" md="3" lg="3" xl="3" class="t-center oneQuarter" style="padding-top: 2.9%">-->
<!--              <img src="../../assets/webPages/product/Vector3.png" style="width: 33%">-->
<!--            </b-col>-->
<!--            <b-col xs="3" sm="3" md="3" lg="3" xl="3" class="t-center oneQuarter">-->
<!--              <img src="../../assets/webPages/product/Vector4.png" style="width: 22%">-->
<!--            </b-col>-->
<!--          </b-row>-->
<!--          <b-row class="ttl w-100p">-->
<!--            <b-col xs="3" sm="3" md="3" lg="3" xl="3" class="t-center oneQuarter">-->
<!--              <p class="p1point5 c-4F9BC1 t-center" style="">No installation</p>-->
<!--            </b-col>-->
<!--            <b-col xs="3" sm="3" md="3" lg="3" xl="3" class="t-center oneQuarter">-->
<!--              <p class="p1point5 c-4F9BC1 t-center" style="">Backup power</p>-->
<!--            </b-col>-->
<!--            <b-col xs="3" sm="3" md="3" lg="3" xl="3" class="t-center oneQuarter">-->
<!--              <p class="p1point5 c-4F9BC1 t-center" style="">Cost savings</p>-->
<!--            </b-col>-->
<!--            <b-col xs="3" sm="3" md="3" lg="3" xl="3" class="t-center oneQuarter">-->
<!--              <p class="p1point5 c-4F9BC1 t-center" style="">Reduce emissions</p>-->
<!--            </b-col>-->
<!--          </b-row>-->
<!--          <b-row class="sts w-100p">-->
<!--            <b-col xs="3" sm="3" md="3" lg="3" xl="3" class="t-center oneQuarter">-->
<!--              <p class="p3 c-183B56 m-l-0 p-l-0">-->
<!--                blipOne plugs right into a wall outlet. No electricians necessary.-->
<!--              </p>-->
<!--            </b-col>-->
<!--            <b-col xs="3" sm="3" md="3" lg="3" xl="3" class="t-center oneQuarter">-->
<!--              <p class="p3 c-183B56 m-l-0 p-l-0">-->
<!--                blipOne has 2.2KWh of backup power in case of an outage. Peace of mind doesn’t have to cost an arm and a leg.-->
<!--              </p>-->
<!--            </b-col>-->
<!--            <b-col xs="3" sm="3" md="3" lg="3" xl="3" class="t-center oneQuarter">-->
<!--              <p class="p3 c-183B56 m-l-0 p-l-0">-->
<!--                blipOne uses price arbitrage (the fancy term for “buy low, sell high”) to save you money on your electric bill. On some rate plans, blip pays for itself in as little as 2 years.-->
<!--              </p>-->
<!--            </b-col>-->
<!--            <b-col xs="3" sm="3" md="3" lg="3" xl="3" class="t-center oneQuarter">-->
<!--              <p class="p3 c-183B56 m-l-0 p-l-0">-->
<!--                By charging overnight, blipOne shifts community energy usage and reduces our reliance on fuel-burning power plants that only turn on to meet peak demand.-->
<!--              </p>-->
<!--            </b-col>-->
<!--          </b-row>-->
          <b-row class="whole w-100p">
            <b-col xs="12" sm="8" offset-sm="2" md="6" offset-md="0" lg="6" offset-lg="0" xl="3" offset-xl="0" class="t-center oneQuarter">
              <img src="../../assets/webPages/product/Vector1.png" style="width: 44px; margin-left: -22px">
<!--              <a href="/product#noInstallation">-->
              <p class="p1point5 c-4F9BC1 t-center hoooover" style="" @click="scroll('noInstallation')">No installation</p>
              <p class="p3 c-183B56 m-l-0 p-l-0">
                blipOne plugs right into a wall outlet. No electricians necessary.
              </p>
            </b-col>
            <b-col xs="12" sm="8" offset-sm="2" md="6" offset-md="0" lg="6" offset-lg="0" xl="3" offset-xl="0" class="t-center oneQuarter">
              <img src="../../assets/webPages/product/Vector2.png" style="width: 70px; margin-left: -35px">
              <p class="p1point5 c-4F9BC1 t-center" style="" @click="scroll('backupPower')">Backup power</p>
              <p class="p3 c-183B56 m-l-0 p-l-0">
                blipOne has 2.2KWh of backup power in case of an outage. Peace of mind doesn’t have to cost an arm and a leg.
              </p>
            </b-col>
            <b-col xs="12" sm="8" offset-sm="2" md="6" offset-md="0" lg="6" offset-lg="0" xl="3" offset-xl="0" class="t-center oneQuarter">
              <img src="../../assets/webPages/product/Vector3.png" style="width: 86px; margin-left: -43px">
              <p class="p1point5 c-4F9BC1 t-center" style="" @click="scroll('costSavings')">Cost savings</p>
              <p class="p3 c-183B56 m-l-0 p-l-0">
                blipOne uses price arbitrage (the fancy term for “buy low, sell high”) to save you money on your electric bill. On some rate plans, blip pays for itself in as little as 2 years.
              </p>
            </b-col>
            <b-col xs="12" sm="8" offset-sm="2" md="6" offset-md="0" lg="6" offset-lg="0" xl="3" offset-xl="0" class="t-center oneQuarter">
              <img src="../../assets/webPages/product/Vector4.png" style="width: 58px; margin-left: -29px">
              <p v-if="ismOrpc === 'PCoperation'" class="p1point5 c-4F9BC1 t-center" style="" @click="scroll('reduceEmissions')">Reduce emissions</p>
              <p v-if="ismOrpc === 'Moperation'" class="p1point5 c-4F9BC1 t-center" style="" @click="scroll('reduceEmissionsM')">Reduce emissions</p>
              <p class="p3 c-183B56 m-l-0 p-l-0">
                By charging overnight, blipOne shifts community energy usage and reduces our reliance on fuel-burning power plants that only turn on to meet peak demand.
              </p>
            </b-col>
          </b-row>
        </b-row>
      </section>
      <!--end: Designed with you in mind-->

      <!--start: Three easy steps to saving you money, and saving the planet-->
      <section class="threeEasy b-FFFFFF i-a-c" id="noInstallation">
        <b-row class="w-80p insider">
          <b-col  xs="12" sm="12" md="12" lg="12" xl="6" class="leftText t-left m-l-0 p-l-0">
            <p class="p1point5 c-4F9BC1" style="margin-bottom: 12px">HOW IT WORKS</p>
            <h2 class="h2point8 c-254B77 f-weight-400 m-l-0 p-l-0" style="margin-bottom: 50px">Three easy steps to saving you money, and saving the planet</h2>
            <p class="p3 c-183B56 m-l-0 p-l-0">
              By running energy-hungry devices from blip’s battery during peak hours, you’ll save money and the planet! Power plants used to meet peak demand on the grid burn dirty fuel, so by shifting energy usage overnight, you’re reducing how much fuel is burned.
              <br><br>
              Just like that, you can fight climate change and accelerate the transition to renewable energy - without getting off the couch!
            </p>
          </b-col>
          <b-col  xs="12" sm="12" md="12" lg="12" xl="6" class="rightUnit">
            <b-row>
              <b-col sm="12" md="12" lg="10" offset-lg="1" xl="12">
                <b-row class="noLine" style="width: 100%;">
                  <b-col  xs="3" sm="3" md="3" lg="3" xl="3" class="leftNum t-left">
                    <h2 class="h1point3 c-D3D3D3 f-weight-300 m-l-0 p-l-0" style="">01</h2>
                  </b-col>
                  <b-col  xs="9" sm="9" md="9" lg="9" xl="9" class="rightText t-left">
                    <p class="p1point5 c-4F9BC1 f-weight-300 m-l-0 p-l-0" style="">Plug blipOne into a standard outlet</p>
                  </b-col>
                </b-row>
                <b-row class="doubleLine noLine" style="width: 100%;">
                  <b-col  xs="3" sm="3" md="3" lg="3" xl="3" class="leftNum t-left">
                    <h2 class="h1point3 c-D3D3D3 m-l-0 p-l-0" style="">02</h2>
                  </b-col>
                  <b-col  xs="9" sm="9" md="9" lg="9" xl="9" class="rightText t-left">
                    <p class="p1point5 c-4F9BC1 f-weight-300 m-l-0 p-l-0" style="">Set up your account, and connect blipOne to your home Wifi</p>
                  </b-col>
                </b-row>
                <b-row class="noLine" style="width: 100%;">
                  <b-col  xs="3" sm="3" md="3" lg="3" xl="3" class="leftNum t-left">
                    <h2 class="h1point3 c-D3D3D3 m-l-0 p-l-0" style="">03</h2>
                  </b-col>
                  <b-col  xs="9" sm="9" md="9" lg="9" xl="9" class="rightText t-left">
                    <p class="p1point5 c-4F9BC1 f-weight-300 m-l-0 p-l-0" style="">
                      Plug appliances that use the most energy into blip
                      <br>
                      (Not sure what that is? We can help)
                    </p>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </section>
      <!--end: Three easy steps to saving you money, and saving the planet-->

      <!--start: Always have a back-up plan-->
      <section class="always b-254B77 t-center" id="backupPower">
        <b-row class="w-100p insider t-center">
          <b-row class="w-80p title t-center">
            <b-col xs="12" sm="12" md="12" lg="12" xl="5" class="leftText t-left col-12">
              <p class="p1point5 c-B0E7FF" style="margin-bottom: 12px">OUTAGE PROTECTION</p>
              <h2 class="h2point8 c-FFFFFF f-weight-400 m-l-0 p-l-0" style="margin-bottom: 50px">Always have a back-up plan</h2>
              <p class="p3 c-FFFFFF m-l-0 p-l-0">
                Be prepared for the next blackout with blipOne. blipOne’s outage protection detects a power outage and provides power to your highest priority devices. When power is restored, blipOne reverts to Smart Mode to maximize savings.
              </p>
            </b-col>
            <b-col  xs="0" sm="0" md="0" lg="0" xl="7" class="rightblc p-l-0 w-100p">
            </b-col>
          </b-row>
<!--          <img src="../../assets/webPages/product/LivingRoomOutline.png">-->
          <b-row class="alwaysPic b-254B77 i-a-c t-center" v-if="ismOrpc === 'PCoperation'">
            <b-row class="w-100p insider t-center">
              <!--          <img src="../../assets/webPages/product/LivingRoomOutline.png">-->
              <img src="https://image-blip.s3.amazonaws.com/front-end/LivingRoomOutline.png">
            </b-row>
          </b-row>

          <b-row class="alwaysBelow b-254B77 t-center" v-if="ismOrpc === 'Moperation'">
            <b-row class="w-80p insider t-center">
              <b-col sm="12" md="12" lg="10" offset-lg="1" xl="8" offset-xl="2">
                <b-row class="w-100p t-center responsiveness">
                  <b-col xs="12" sm="6" md="6" lg="6" xl="6" class="leftText t-left p-l-0">
                    <!--            <p class="p1point5 c-B0E7FF" style="margin-bottom: 12px">OUTAGE PROTECTION</p>-->
                    <!--            <h2 class="h2point8 c-FFFFFF f-weight-400 m-l-0 p-l-0" style="margin-bottom: 50px">Always have a back-up plan</h2>-->
                    <b-row class="res w-100p t-center m-l-0 p-l-0">
                      <b-col xs="2" sm="0" md="2" lg="2" xl="2" class="leftImg refrigerator t-center m-l-0 i-a-c p-l-0 col-2" v-if="!noIcon">
<!--                        <img src="../../assets/webPages/product/refrigerator.png" class="m-lr-a" style="width: 40px">-->
                      </b-col>
                      <b-col xs="9" sm="12" md="9" lg="9" xl="9" class="rightText t-left col-9">
                        <p class="p2 c-FFFFFF m-l-0 p-l-0">
                          Refridgerator
                        </p>
                        <p class="p2 c-B0E7FF m-l-0 p-l-0">
                          11-22 hours
                        </p>
                      </b-col>
                    </b-row>
                    <b-row class="res w-100p t-center m-l-0 p-l-0">
                      <b-col xs="2" sm="0" md="2" lg="2" xl="2" class="leftImg iceCream t-center m-l-0 i-a-c p-l-0 col-2" v-if="!noIcon">
<!--                        <img src="../../assets/webPages/product/ice_cream.png" class="m-lr-a" style="width: 50px">-->
                      </b-col>
                      <b-col xs="9" sm="12" md="9" lg="9" xl="9" class="rightText t-left col-9">
                        <p class="p2 c-FFFFFF m-l-0 p-l-0">
                          Freezer
                        </p>
                        <p class="p2 c-B0E7FF m-l-0 p-l-0">
                          1-3 days
                        </p>
                      </b-col>
                    </b-row>
                    <b-row class="res w-100p t-center m-l-0 p-l-0">
                      <b-col xs="2" sm="0" md="2" lg="2" xl="2" class="leftImg microwave t-center m-l-0 i-a-c p-l-0 col-2" v-if="!noIcon">
<!--                        <img src="../../assets/webPages/product/microwave.png" class="m-lr-a" style="width: 44px">-->
                      </b-col>
                      <b-col xs="9" sm="12" md="9" lg="9" xl="9" class="rightText t-left col-9">
                        <p class="p2 c-FFFFFF m-l-0 p-l-0">
                          Microwave
                        </p>
                        <p class="p2 c-B0E7FF m-l-0 p-l-0">
                          1-4 hours
                        </p>
                      </b-col>
                    </b-row>
                    <b-row class="res w-100p t-center m-l-0 p-l-0">
                      <b-col xs="2" sm="0" md="2" lg="2" xl="2" class="leftImg heater t-center m-l-0 i-a-c p-l-0 col-2" v-if="!noIcon">
<!--                        <img src="../../assets/webPages/product/iconoir_fire-flame.png" class="m-lr-a" style="width: 41px">-->
                      </b-col>
                      <b-col xs="9" sm="12" md="9" lg="9" xl="9" class="rightText t-left col-9">
                        <p class="p2 c-FFFFFF m-l-0 p-l-0">
                          Space heater
                        </p>
                        <p class="p2 c-B0E7FF m-l-0 p-l-0">
                          1-3 hours
                        </p>
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col xs="12" sm="6" md="6" lg="6" xl="6" class="rightText p-l-0">
                    <b-row class="res w-100p t-center m-l-0 p-l-0">
                      <b-col xs="2" sm="0" md="2" lg="2" xl="2" class="leftImg wind t-center m-l-0 i-a-c p-l-0 col-2" v-if="!noIcon">
<!--                        <img src="../../assets/webPages/product/wind.png" class="m-lr-a" style="width: 41px">-->
                      </b-col>
                      <b-col xs="9" sm="12" md="9" lg="9" xl="9" class="rightText t-left col-9">
                        <p class="p2 c-FFFFFF m-l-0 p-l-0">
                          Window A/C
                        </p>
                        <p class="p2 c-B0E7FF m-l-0 p-l-0">
                          1-4 hours
                        </p>
                      </b-col>
                    </b-row>
                    <b-row class="res w-100p t-center m-l-0 p-l-0">
                      <b-col xs="2" sm="0" md="2" lg="2" xl="2" class="leftImg monitor t-center m-l-0 i-a-c p-l-0 col-2" v-if="!noIcon">
<!--                        <img src="../../assets/webPages/product/monitor.png" class="m-lr-a" style="width: 41px">-->
                      </b-col>
                      <b-col xs="9" sm="12" md="9" lg="9" xl="9" class="rightText t-left col-9">
                        <p class="p2 c-FFFFFF m-l-0 p-l-0">
                          Computer
                        </p>
                        <p class="p2 c-B0E7FF m-l-0 p-l-0">
                          1-2 days
                        </p>
                      </b-col>
                    </b-row>
                    <b-row class="res w-100p t-center m-l-0 p-l-0">
                      <b-col xs="2" sm="0" md="2" lg="2" xl="2" class="leftImg wifi t-center m-l-0 i-a-c p-l-0 col-2" v-if="!noIcon">
<!--                        <img src="../../assets/webPages/product/wifi.png" class="m-lr-a" style="width: 41px">-->
                      </b-col>
                      <b-col xs="9" sm="12" md="9" lg="9" xl="9" class="rightText t-left col-9">
                        <p class="p2 c-FFFFFF m-l-0 p-l-0">
                          Internet router
                        </p>
                        <p class="p2 c-B0E7FF m-l-0 p-l-0">
                          6-18 days
                        </p>
                      </b-col>
                    </b-row>
                    <b-row class="res w-100p t-center m-l-0 p-l-0">
                      <b-col xs="2" sm="0" md="2" lg="2" xl="2" class="leftImg tv t-center m-l-0 i-a-c p-l-0 col-2" v-if="!noIcon">
<!--                        <img src="../../assets/webPages/product/tv.png" class="m-lr-a" style="width: 41px">-->
                      </b-col>
                      <b-col xs="10" sm="12" md="9" lg="9" xl="9" class="rightText t-left col-9">
                        <p class="p2 c-FFFFFF m-l-0 p-l-0">
                          TV
                        </p>
                        <p class="p2 c-B0E7FF m-l-0 p-l-0">
                          1-1.5 days
                        </p>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
              </b-col>
              <p class="p4 c-FFFFFF t-left">
                Run times quoted are based on a blipOne full charge, appliance power consumption, and assume continuous use
                <br><br>
                Source: Silicon Valley Power
              </p>
              <!--          <p class="p4 c-FFFFFF t-left"></p>-->
              <!--          <img src="../../assets/webPages/product/LivingRoomOutline.png">-->
            </b-row>
          </b-row>
        </b-row>

      </section>
      <!--end: Always have a back-up plan-->

      <!--start: Save money on your electricity bills-->
      <section class="saveMoney b-EEF9FE i-a-c t-center" id="costSavings">
        <b-row class="w-85p insider t-center">
          <b-col xs="12" sm="12" md="12" lg="12" xl="5" class="leftText t-left">
            <p class="p1point5 c-4F9BC1" style="margin-bottom: 12px">COST SAVINGS</p>
            <h2 class="h2point8 c-254B77 f-weight-400 m-l-0 p-l-0" style="margin-bottom: 50px">Save money on your electric bills</h2>
            <p class="p3 c-183B56 m-l-0 p-l-0">
              blipOne automatically stores energy when electricity is cheap during “off peak” hours and discharges when electricity is expensive during “peak” hours.
              <br><br>
              Plug your energy dense appliances, like a window AC unit, into blipOne and you could save you hundreds of dollars - blipOne would pay for itself!
            </p>
            <button type="button" class="btn submit b-254B77" onclick="window.open('../calculator')">
              See Your Savings
            </button>
          </b-col>
          <b-col xs="12" sm="12" md="12" lg="12" xl="7" class="rightChart p-l-0 i-a-c">
            <div id="chartTwo" class="chart" style="width: 95%; height: 438px"></div>
          </b-col>
        </b-row>
      </section>
      <!--end: Save money on your electricity bills-->

      <!--start: Set it and forget it-->
      <section class="setItAnd b-EEF9FE i-a-c" v-if="ismOrpc === 'PCoperation'">
        <b-row class="insider w-80p">
          <b-col  xs="12" sm="12" md="12" lg="6" xl="6" class="leftImg p-l-0">
            <img src="../../assets/webPages/product/Charge.png" alt="" class="">
            <img src="../../assets/webPages/product/Discharge.png" alt="" class="">
          </b-col>
          <b-col  xs="12" sm="12" md="12" lg="6" xl="6" class="rightText t-left">
            <p class="p1point5 c-4F9BC1" style="margin-bottom: 12px">SMART BATTERY</p>
            <h2 class="h2point8 c-254B77 f-weight-400 m-l-0 p-l-0" style="margin-bottom: 50px">Set it and forget it</h2>
            <p class="p3 c-183B56 m-l-0 p-l-0">
              blipOne uses an algorithm that tells it when to charge and discharge to optimize your savings.
            </p>
<!--            <router-link :to="{path: '/about'}" class="c-4F9BC1 routerLink">-->
<!--              Learn More <font-awesome-icon icon="arrow-right" style="font-size: 16px; margin-bottom: -1px;"/>-->
<!--            </router-link>-->
<!--            <button type="button" class="btn submit" onclick="window.location.href='../about'">-->
<!--              Learn more-->
<!--            </button>-->
          </b-col>
        </b-row>
      </section>
      <section class="setItAnd b-EEF9FE i-a-c" v-if="ismOrpc === 'Moperation'">
        <b-row class="insider w-80p">
          <b-col  xs="12" sm="12" md="12" lg="12" xl="6" class="leftText t-left">
            <p class="p1point5 c-4F9BC1" style="margin-bottom: 12px">SMART BATTERY</p>
            <h2 class="h2point8 c-254B77 f-weight-400 m-l-0 p-l-0" style="margin-bottom: 50px">Set it and forget it</h2>
            <p class="p3 c-183B56 m-l-0 p-l-0">
              blipOne uses an algorithm that tells it when to charge and discharge to optimize your savings.
            </p>
          </b-col>
          <b-col  xs="12" sm="12" md="12" lg="10" offset-lg="1" xl="6" offset-xl="0" class="rightImg t-center">
            <img src="../../assets/webPages/product/Charge.png" alt="" class="">
            <img src="../../assets/webPages/product/Discharge.png" alt="" class="">
          </b-col>
        </b-row>
      </section>
      <!--end: Set it and forget it-->

      <!--start: Effortlessly help take peaker plants offline-->
      <section class="effortlessly b-FFFFFF i-a-c" id="reduceEmissions" v-if="ismOrpc === 'PCoperation'">
        <b-row class="insider w-80p">
          <b-col  xs="12" sm="12" md="12" lg="7" xl="7" class="leftImg p-l-0">
            <img src="../../assets/webPages/product/reduce-emissions-graphic.png" alt="" class="">
          </b-col>
          <b-col  xs="12" sm="12" md="12" lg="5" xl="5" class="rightText t-left">
            <p class="p1point5 c-4F9BC1" style="margin-bottom: 12px">REDUCE EMISSIONS</p>
            <h2 class="h2point8 c-254B77 f-weight-400 m-l-0 p-l-0" style="margin-bottom: 50px">Effortlessly help take peaker plants offline</h2>
            <p class="p3 c-183B56 m-l-0 p-l-0">
              Using blipOne will help reduce your carbon footprint without having to make any lifestyle changes.  Each blipOne eliminates 100kg of CO2 emissions per year. If we each help a little, we can accomplish a lot.
            </p>
          </b-col>
        </b-row>
      </section>
      <section class="effortlessly b-FFFFFF i-a-c" id="reduceEmissionsM" v-if="ismOrpc === 'Moperation'">
        <b-row class="insider w-80p">
          <b-col  xs="12" sm="12" md="12" lg="12" xl="7" class="leftText t-left">
            <p class="p1point5 c-4F9BC1" style="margin-bottom: 12px">REDUCE EMISSIONS</p>
            <h2 class="h2point8 c-254B77 f-weight-400 m-l-0 p-l-0" style="margin-bottom: 50px">Effortlessly help take peaker plants offline</h2>
            <p class="p3 c-183B56 m-l-0 p-l-0">
              Using blipOne will help reduce your carbon footprint without having to make any lifestyle changes.  Each blipOne eliminates 100kg of CO2 emissions per year. If we each help a little, we can accomplish a lot.
            </p>
          </b-col>
          <b-col  xs="12" sm="12" md="12" lg="10" offset-lg="1" xl="5" offset-xl="0" class="rightImg t-center">
            <img src="../../assets/webPages/product/reduce-emissions-graphic.png" alt="" class="">
          </b-col>
        </b-row>
      </section>
      <!--end: Effortlessly help take peaker plants offline-->

      <!--start: Designed for you and your home-->
      <section class="always b-254B77 t-center">
        <b-row class="w-80p insider t-center">
          <b-col xs="12" sm="12" md="12" lg="12" xl="5" class="leftText t-left">
            <p class="p1point5 c-B0E7FF" style="margin-bottom: 12px">PRODUCT DETAILS</p>
            <h2 class="h2point8 c-FFFFFF f-weight-400 m-l-0 p-l-0" style="margin-bottom: 50px">Designed for you and your home</h2>
            <p class="p3 c-FFFFFF m-l-0 p-l-0">
              Energy storage solutions can be an eyesore, so we made sure that the blipOne was thoughtfully designed to be not only functional but also aesthetically pleasing.
            </p>
          </b-col>
          <b-col xs="12" sm="12" md="12" lg="12" xl="7" class="rightblc p-l-0">
          </b-col>
        </b-row>
        <b-row class="designedFor b-254B77 i-a-c">
          <b-row class="w-80p insider">
            <b-row class="whole w-100p">
              <b-col xs="12" sm="12" md="8" offset-md="2" lg="4" offset-lg="0" xl="4" offset-xl="0" class="t-center oneThird">
                <img src="../../assets/webPages/product/SpaceConscious.png" style="width: 76px; margin-left: -38px">
                <p class="p1point5 c-DEF5FF t-center" style="">Space-conscious</p>
                <p class="p3 c-FFFFFF m-l-0 p-l-0">
                  Our compact design occupies less than one square foot
                </p>
              </b-col>
              <b-col xs="12" sm="12" md="8" offset-md="2" lg="4" offset-lg="0" xl="4" offset-xl="0" class="t-center oneThird">
                <img src="../../assets/webPages/product/Frame.png" style="width: 72px; margin-left: -36px">
                <p class="p1point5 c-DEF5FF t-center" style="">Ergonomic + portable</p>
                <p class="p3 c-FFFFFF m-l-0 p-l-0">
                  blipOne’s ergonomic handle, wheels and lightweight design makes it easy to transport, so you can bring its benefits with you whenever you move
                </p>
              </b-col>
              <b-col xs="12" sm="12" md="8" offset-md="2" lg="4" offset-lg="0" xl="4" offset-xl="0" class="t-center oneThird">
                <img src="../../assets/webPages/product/ModernDesign.png" style="width: 50px; margin-left: -25px">
                <p class="p1point5 c-DEF5FF t-center" style="">Modern design</p>
                <p class="p3 c-FFFFFF m-l-0 p-l-0">
                  Integrate blipOne into your home with its sleek design and color options to fit your style
                </p>
              </b-col>
            </b-row>
          </b-row>
        </b-row>
      </section>

      <!--end: Designed for you and your home-->

      <!--start: Control your blipOne from anywhere-->
      <section class="control b-FFFFFF i-a-c">
        <b-row class="insider w-85p">
          <b-col  xs="12" sm="12" md="6" lg="6" xl="6" class="leftImg p-l-0">
            <img src="../../assets/webPages/product/myblip-dashboard.png" alt="" class="">
          </b-col>
          <b-col  xs="12" sm="12" md="6" lg="6" xl="6" class="rightText t-left">
            <p class="p1point5 c-4F9BC1" style="margin-bottom: 12px">USER DASHBOARD</p>
            <h2 class="h2point8 c-254B77 f-weight-400 m-l-0 p-l-0" style="margin-bottom: 50px">Control your blipOne from anywhere</h2>
            <p class="p3 c-183B56 m-l-0 p-l-0">
              Our seamless IoT integration allows you to update your device settings, view your savings and update energy storage preferences from anywhere.
            </p>
            <button type="button" class="btn submit" onclick="window.open('/coming-soon')">
              Go to Dashboard
            </button>
          </b-col>
        </b-row>
      </section>
      <!--end: Control your blipOne from anywhere-->

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
import echarts from "echarts";
require('echarts/theme/shine');

export default {
  name: "product",
  data() {
    return {
      formID: "email_signup_product",
      chartTwo: null,
      ismOrpc: '',
      // screenWidth: document.body.clientWidth,
    };
  },
  computed: {
    // reduceE: function(){
    //   if (this.ismOrpc === 'PCoperation') return 'reduceEmissions'
    //   else if (this.ismOrpc === 'Moperation') return 'reduceEmissionsM'
    // }
    noIcon: function(){
      if (document.body.clientWidth <= 768 && document.body.clientWidth > 576) return true
      return false
    }
  },
  head() {
    return {
      title: 'Product Page',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'product',
          name: 'product',
          content: 'The most accessible smart battery that works for anyone, anywhere. 2.2KWh capacity - blipOne can power a fridge for 1-2 days and the Wi-Fi for weeks.	'
        }
      ]
    }
  },
  created() {
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
  mounted() {
    // this.$ga.page('/product');
    // this.print();
    this.$nextTick(function() {
      this.drawChartTwo('chartTwo')
    });
    // let that = this;
    // window.onresize =() =>{
    //   return (()=>{
    //     window.clientWidth = document.body.clientWidth;
    //     that.screenWidth = window.clientWidth;
    //   })()
    // };
  },
  // watch:{
  //   screenWidth(newVal,oldVal){
  //     alert(newVal);//浏览器窗口变化时，打印宽度。
  //   }
  // },
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
    // reduceE(){
    //   if (this.ismOrpc === 'PCoperation'){
    //     window.location.href='product/#reduceEmissions'
    //   }else if (this.ismOrpc === 'Moperation'){
    //     window.location.href='product/#reduceEmissionsM'
    //   }
    //
    // },
    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;

      window.scrollTo(0, top);
    },
    scroll(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth"
      });
    },
    drawChartTwo(id){
      this.charts = echarts.init(document.getElementById(id))
      // this.charts.setOption({
      this.charts.setOption({
        tooltip: {
          // enabled: false,
          // trigger: 'item',
          trigger: 'axis',
          show: false,
        },
        color:['#EB5757','#4F9BC1'],
        legend: {
          icon: '',
          data: ['Costs you would pay without blip', 'Costs you would pay with blip'],
          itemWidth: 20,
          selectedMode: false,
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['3 AM', '6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM', '12 AM']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Costs you would pay without blip',
            data: [1, 1, 2, 1.7, 2, 5, 2, 1],
            type: 'line',
            symbol: 'circle',
            smooth: true,
            itemStyle:{
              normal:{
                lineStyle:{
                  color: '#EB5757'
                }
              }
            }
          },
          {
            name: 'Costs you would pay with blip',
            data: [1.5, 1.5, 2, 1.7, 2, 2.5, 2, 1.5],
            type: 'line',
            symbol: 'circle',
            smooth: true,
            itemStyle:{
              normal:{
                lineStyle:{
                  color: '#4F9BC1',
                  type: 'dashed'
                }
              }
            }
          }
        ],
        textStyle:{fontFamily: 'Montserrat'}
      })
    }
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
@import "src/scss/pages/productIII";
</style>


