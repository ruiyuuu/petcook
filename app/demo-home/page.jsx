import React from "react";
import Image from "next/image";
import Kitchen from "@/public/Kitchen.png";
import Kitchen_M from "@/public/Kitchen_m.png";
import DialogPic from "@/public/Dialog.png";
import Dog from "@/public/Dog.png";
import Cat from "@/public/Cat.png";
import Circles from "@/public/Circles.png";
import Can from "@/public/Can.png";
import ShineBorder from "@/public/shine-border.png";
import ShineOrange from "@/public/shine-orange.png";
import ShineBrown from "@/public/shine-brown.png";
import Wow from "@/public/wow.png";
import Yes from "@/public/yes.png";
import Minus1 from "@/public/+1.png";
import ProductBG1 from "@/public/product-bg.png";
import ProductBG2 from "@/public/product-bg2.png";
import Paw from "@/public/paw.png";
import Popular_PRD from "@/public/人氣商品.png";
import PickyEater_PRD from "@/public/挑嘴貓罐罐.png";
import Nature_PRD from "@/public/nature-food.png";
import Handmade_PRD from "@/public/handmade.png";
import Machine from "@/public/machine.png";
import ISO from "@/public/ISO.png";
import ISO_laptop from "@/public/ISO_laptop.png";
import ISO_M from "@/public/ISO_m.png";
import CatHead from "@/public/CatHead.png";
import Ribbon from "@/public/ribbon.png";
import Bird from "@/public/bird.png";
import SliderCommend from "@/components/SliderCommend";
import Line from "@/public/line.png";
import Balloon from "@/public/balloon.png";
import Lv1 from "@/public/lv1.png";
import Lv1_m from "@/public/lv1_m.png";
import Lv2 from "@/public/lv2.png";
import Lv3 from "@/public/lv3.png";
import Lv4 from "@/public/lv4.png";
import Lv5 from "@/public/lv5.png";
import Lv6 from "@/public/lv6.png";
import Partner1 from "@/public/partner1.png";
import Partner2 from "@/public/partner2.png";
import StepCard from "@/public/step-card.png";
import SlideShop from "@/components/slideShop";

export default function Page() {
  const shops = [
    "包旺家",
    "踏踏地球",
    "mao & kou 寵物用品(水湳店)",
    "mao & kou 寵物用品(勤美店)",
    "牧貓寵物精品旅館",
    "伊狗寵物選品Eeego",
    "酷吉選品Kuji Select",
    "寵曖貓狗生活館",
    "好萌pet sitter",
    "毛宅仔寵物美容",
    "巧森寵物",
    "豆哥與凱特寵物用品",
    "HAPET好寵 永康店",
    "HAPET好寵 安森店",
    "球掌世界寵物超市",
    "美好寵物美容",
    "悠遊貓旅",
    "囍八咖啡 ᴘᴇᴛ sʜᴏᴘ.ᴄᴏғғᴇᴇ",
    "點點寵物",
    "蕎逸寵物店",
    "貝果貝果寵物精品旅館",
    "I dog愛逗格寵物美容",
    "帕彼愛逗寵物",
    "汪喵寵物選品",
    "太陽蛋毛孩選物店",
    "頑皮族寵物生活館-建國店",
    "探狗喵 毛孩選物店 SKM Park Outlets 高雄草衙",
    "集貓舍",
    "乾乾咬一口寵物用品店",
    "佩泊寵物美容",
    "萬達寵物－寵物公園",
    "魚中魚－寵物水族",
    "不是寵物店",
    "Bone Bone 寵物店",
    "金吉利寵物用品店",
    "百分百 - 寵物生活館",
    "HKTV Mall",
    "Three Little Meow 寵物選品",
  ];
  const shopsRevers = shops.slice().reverse();
  const step = [
    {
      id: 1,
      title: "訂單確認",
      content: (
        <>
          洽談需求
          <br />
          制定專屬方案
        </>
      ),
      img1: "/step-01.png",
      img2: "/step-01-2.png",
    },
    {
      id: 2,
      title: "需求討論",
      content: (
        <>
          產品規劃
          <br />
          提供專業建議
        </>
      ),
      img1: "/step-02.png",
      img2: "/step-02-2.png",
    },
    {
      id: 3,
      title: "生產出貨",
      content: (
        <>
          嚴格品管
          <br />
          確保穩定供應
        </>
      ),
      img1: "/step-03.png",
      img2: "/step-03-2.png",
    },
    {
      id: 4,
      title: "專人聯繫",
      content: (
        <>
          快速對接
          <br />
          全程服務
        </>
      ),
      img1: "/step-04.png",
      img2: "/step-04-2.png",
    },
  ];
  return (
    <>
      <div className="comic-border w-100"></div>
      <div className="intro">
        <div className="intro__dialog">
          <Image
            src={DialogPic}
            width={685}
            height={514}
            alt=""
            className="dialogPic"
            priority
          />
          <div className="intro__dialog__content">
            <div className="intro__dialog__content__title">
              <span className="highlight">派庫</span>
              廚房
            </div>
            <div className="intro__dialog__content__subtitle">
              一間專為毛孩料理的寵物食品廚房
            </div>
            <div className="intro__dialog__content__des">
              在派庫， 我們相信毛孩的食物應該像家人一樣被用心對待。
              <br />
              <br />
              我們選用新鮮肉源，講究食材產地與部位，堅持使用100%原型純肉、無添加的天然食材，
              每一塊凍乾與肉乾都保留原始肉塊的真實樣貌與營養，不混肉、無加工，也不妥協。
            </div>
          </div>
        </div>
        <Image
          src={Kitchen}
          width={0}
          height={0}
          alt=""
          className="intro__bg"
          priority
        />
        <Image
          src={Kitchen_M}
          width={0}
          height={0}
          alt=""
          className="intro__bg mobile"
          priority
        />
        <Image
          src={Cat}
          width={244}
          height={366}
          alt=""
          className="intro__cat"
          priority
        />
        <Image
          src={Dog}
          width={262}
          height={443}
          alt=""
          className="intro__dog"
          priority
        />
        <div className="comic-border rotate"></div>
        <div className="comic-border w-100 absolute bottom"></div>
        <div className="comic-border vertical"></div>
        <div className="source">
          <div className="source__content">
            <div className="source__content__title">看得見的天然寵物食品</div>
            每款產品都清楚標示來源，於台灣製作並通過食品安全認證，
            <br />
            成分單純透明、份量適中，讓你看得見來源，也能安心餵食。
          </div>
          <div className="circles">
            <Image
              src={Circles}
              alt=""
              priority
              width={0}
              height={0}
              className="circles__bg"
            />
            <div className="circles__text">
              <span>台灣製作</span>
              <span>原型純肉</span>
              <span>無添加</span>
            </div>
          </div>
        </div>
        <Image src={Can} alt="" priority width={0} height={0} className="can" />
        <Image
          src={ShineBorder}
          alt=""
          priority
          width={0}
          height={0}
          className="shine border"
        />
        <Image
          src={ShineOrange}
          alt=""
          priority
          width={23}
          height={29}
          className="shine orange"
        />
        <Image
          src={ShineBrown}
          alt=""
          priority
          width={0}
          height={0}
          className="shine brown"
        />
        <Image src={Wow} alt="" priority width={0} height={0} className="wow" />
        <Image
          src={Yes}
          alt=""
          priority
          width={180}
          height={138}
          className="yes"
        />
        <Image
          src={Yes}
          alt=""
          priority
          width={180}
          height={138}
          className="yes two"
        />
        <Image
          src={Minus1}
          alt=""
          priority
          width={87}
          height={56}
          className="minus1"
        />
        <Image
          src={Minus1}
          alt=""
          priority
          width={0}
          height={0}
          className="minus1 two"
        />
        <Image
          src={Minus1}
          alt=""
          priority
          width={0}
          height={0}
          className="minus1 three"
        />
        <Image
          src={ShineBorder}
          alt=""
          priority
          width={0}
          height={0}
          className="shine three"
        />
        <Image
          src={ShineOrange}
          alt=""
          priority
          width={23}
          height={29}
          className="shine two"
        />
      </div>
      <div className="product">
        <Image
          src={ProductBG1}
          width={1440}
          height={624}
          alt=""
          className="product-bg"
        />
        <div className="comic-border w-100 absolute bottom"></div>
        <div>
          <Image src={Paw} width={0} height={0} alt="" className="paw" />
          <Image src={Paw} width={0} height={0} alt="" className="paw" />
        </div>
        <Image
          src={Popular_PRD}
          width={0}
          height={0}
          alt=""
          className="popular-prod"
        />
        <Image src={Machine} width={0} height={0} alt="" className="machine" />
      </div>
      <div className="product">
        <Image
          src={ProductBG2}
          width={1440}
          height={624}
          alt=""
          className="product-bg"
        />
        <div className="comic-border w-100 absolute bottom"></div>
        <div>
          <Image src={Paw} width={0} height={0} alt="" className="paw" />
          <Image src={Paw} width={0} height={0} alt="" className="paw" />
        </div>
        <Image
          src={PickyEater_PRD}
          width={0}
          height={0}
          alt=""
          className="popular-prod"
        />
        <Image src={Machine} width={0} height={0} alt="" className="machine" />
      </div>
      <div className="product">
        <Image
          src={ProductBG1}
          width={1440}
          height={624}
          alt=""
          className="product-bg"
        />
        <div className="comic-border w-100 absolute bottom"></div>
        <div>
          <Image src={Paw} width={0} height={0} alt="" className="paw" />
          <Image src={Paw} width={0} height={0} alt="" className="paw" />
        </div>
        <Image
          src={Nature_PRD}
          width={0}
          height={0}
          alt=""
          className="popular-prod"
        />
        <Image src={Machine} width={0} height={0} alt="" className="machine" />
      </div>
      <div className="product">
        <Image
          src={ProductBG2}
          width={1440}
          height={624}
          alt=""
          className="product-bg"
        />
        <div className="comic-border w-100 absolute bottom"></div>
        <div>
          <Image src={Paw} width={0} height={0} alt="" className="paw" />
          <Image src={Paw} width={0} height={0} alt="" className="paw" />
        </div>
        <Image
          src={Handmade_PRD}
          width={0}
          height={0}
          alt=""
          className="popular-prod"
        />
        <Image src={Machine} width={0} height={0} alt="" className="machine" />
      </div>
      <div className="iso">
        <Image src={ISO} width={0} height={0} alt="" className="iso__bg" />
        <Image
          src={ISO_laptop}
          width={0}
          height={0}
          alt=""
          className="iso__bg laptop"
        />
        <Image src={ISO_M} width={0} height={0} alt="" className="iso__bg m" />
        <div>
          <div className="comic-border rotate"></div>
          <div className="comic-border rotate"></div>
          <div className="comic-border rotate"></div>
        </div>
        <div className="iso__content">
          <div className="iso__content__title">
            派庫通過 ISO9001 認證
            <br />
            嚴格遵循 HACCP 標準
          </div>
          <div className="iso__content__description">
            毛孩的每一口，
            <br />
            都是經過嚴格把關的安心食材！
          </div>
          <a
            href="https://www.petcookco.com/pages/certification"
            className="primary-button"
          >
            食品合格檢驗
          </a>
        </div>
        <Image alt="" src={CatHead} className="cat-head" />
        <div className="best-choice">
          <div className="best-choice__title blue">冷凍乾燥是什麼？</div>
          <div className="best-choice__title">
            最適合犬貓的天然寵物食品選擇！
          </div>
          <div className="ribbon">
            <Image src={Ribbon} alt="" className="ribbon__foot" />
            <div className="ribbon__text">
              100% <br />
              還原食材營養與風味
            </div>
            <Image src={Ribbon} alt="" className="ribbon__foot" />
          </div>
          <div className="best-choice__description">
            冷凍乾燥（Freeze-Dried Pet Food）
            <br />
            是近年來備受推崇的寵物食品製作技術，透過技術將食材中的水分
            <br />
            直接昇華為氣體消除，有效保留食材的原始風味與營養。
            <br />
            <br />
            無論作為零食凍乾享用，或加水還原新鮮肉品，
            <br />
            都是讓毛孩安心入口的優質零食！
          </div>
        </div>
        <Image alt="" src={Bird} className="bird" />
      </div>
      <div className="commend">
        <div className="commend__title">毛爸毛媽這樣說</div>
        <Image alt="" src={Balloon} className="balloon" />
        <Image alt="" src={Balloon} className="balloon" />
        <SliderCommend />
        <Image alt="" src={Line} className="line" />
      </div>
      <div className="member">
        <div className="member__title">派庫 × 會員制</div>
        <div className="member__all">
          <div className="member__all__item">
            <Image alt="" src={Lv1} className="level" />
          </div>
          <div className="member__all__item">
            <Image alt="" src={Lv2} className="level" />
          </div>
          <div className="member__all__item">
            <Image alt="" src={Lv3} className="level" />
          </div>
          <div className="member__all__item">
            <Image alt="" src={Lv4} className="level" />
          </div>
          <div className="member__all__item">
            <Image alt="" src={Lv5} className="level" />
          </div>
          <div className="member__all__item">
            <Image alt="" src={Lv6} className="level" />
          </div>
        </div>
        <Image src={Lv1_m} alt="" className="level mobile" />
      </div>
      <div className="partner">
        <div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="partner__content">
            <div className="partner__content__subtitle">
              專業寵物凍乾代工 / 批發服務
            </div>
            <div className="partner__content__title">
              派庫深受廠商信任
              <br />
              業界信賴的寵物食品夥伴
            </div>
            <div className="partner__content__description">
              派庫廚房通過 ISO9001
              <br className="m" /> 且依 HACCP 的標準嚴格控管品質，
              <br />
              以台灣製造、高穩定供應的
              <br className="m" />
              寵物凍乾代工 & 批發服務，
              <br />
              深受不同業者品牌與通路商信賴。
            </div>
          </div>
        </div>
        <Image alt="" src={Partner1} className="partner-pic" />
        <Image alt="" src={Partner2} className="partner-pic" />
        <div className="all-partner">
          <div className="all-partner__title">
            我們的通路夥伴
            <a
              href="https://www.petcookco.com/pages/shops"
              className="all-shops"
            >
              查看所有實體通路 ▸
            </a>
          </div>
          <div className="all-partner__items">
            <SlideShop shops={shops} />
          </div>
          <div className="all-partner__items reverse">
            <SlideShop shops={shopsRevers} />
          </div>
        </div>
        <div>
          <div className="triangle"></div>
        </div>
      </div>
      <div className="comic-border w-100"></div>
      <div className="contact">
        <div className="contact__title">
          <span>四步驟 輕鬆合作</span>
          聯繫派庫
        </div>
        <div className="step">
          {step?.map((item) => (
            <div className="step__card" key={item.title}>
              <Image
                src={StepCard}
                alt=""
                width={0}
                height={0}
                className="step__card__bg"
              />
              <Image
                src={item.img1}
                alt=""
                width={344}
                height={344}
                className="step__card__role"
              />
              <div className="step__card__content">
                <div className="number">{item.id}</div>
                <div className="line"></div>
                <div className="group">
                  <div className="group__title">{item.title}</div>
                  <div className="group__content">{item.content}</div>
                </div>
              </div>
              <Image
                src={item.img2}
                alt=""
                width={344}
                height={344}
                className="step__card__role2"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
