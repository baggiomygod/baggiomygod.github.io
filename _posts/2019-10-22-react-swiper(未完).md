# react中使用swiper

### 问题
初始初始化 找不到元素，需要延迟1秒初始化才生效，如何解决？
```
import React from 'react'
import Swiper from 'swiper'
import { Modal } from 'dpl-react'
import 'swiper/css/swiper.css'

function tableSwiper(props, ref) {
  const { fileList } = props
  const [visible, setVisible] = useState(false)

  let galleryThumbs
  const initSwiper = () => {
    galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
  }

  useEffect(() => {
    if (document.querySelector('.gallery-thumbs')) {
      initSwiper()
    }
  });

  useEffect(() => {
    setTimeout(() => {
      if (document.querySelector('.gallery-thumbs')) {
        console.log(document.querySelector('.gallery-thumbs'))
        initSwiper()
      }
    }, 1000)
  }, []);

  const renderSwipers = (type) => {
    return fileList.map((item, index) => {
      return (
        <div key={index} className="swiper-slide" >
            <div className="img-sub-text"> { type === 'sub' ? item.fileName : '' } </div>
            <img src={item.fileUrl} />
        </div>
      )
    })
  }
  return (
    <Modal
      width="65%"
      title="常用表格"
      visible={visible}
      onCancel={() => {
        setVisible(false)
      }}
      className="table-swiper-container"
      footer={[]}
      >
      <div className="swiper-container gallery-top">
        <div className="swiper-wrapper" style={{ height: '360px' }}>
          { renderSwipers() }
        </div>
        <div className="swiper-button-next swiper-button-black" />
        <div className="swiper-button-prev swiper-button-black" />
        {/* <div className="swiper-button-next swiper-button-black" /> */}
        {/* <div className="swiper-button-prev swiper-button-black" /> */}
      </div>
      <div className="swiper-container gallery-thumbs">
        <div className="swiper-wrapper" style={{ height: '100%' }}>
          { renderSwipers('sub') }
        </div>
      </div>
    </Modal>
  )
}

tableSwiper.propTypes = {
  fileList: PropTypes.array,
}
export default forwardRef(tableSwiper)

```