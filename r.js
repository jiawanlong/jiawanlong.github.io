
    /**
    *  亲爱的朋友：
    *      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的
    *      所有示例都可以免费使用，当然这花费我巨大得心血，作为开发者，你应该也懂
    *      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
    *      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的
    *      因为你的时间非常宝贵，开通会员可取消弹窗、控制台输出、水印等、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入
    **/


    init();

    function init() {
        initModal();
        if (!(window.location.href.indexOf('jiawanlong.github.io') > -1)) {
            if (!isInBusinessHours()) {
                alert('亲爱的同仁，现在非工作时间：你透支健康换来的优秀，不过是人事档案里随时可替换的几行宋体字。而单位的运转齿轮从未因此停滞半分。人生不是用红头文件丈量的，而是用看见花开、听见雨声的瞬间拼凑的。毕竟，你熬的夜、拼的命、流的泪，最后都成了档案袋里轻飘飘的A4纸，而你错过的晚霞、失约的晚餐、没牵到的手，才是永远无法补录的人生正文。')
            }
            setTimeout(() => {
                if (confirm("检测到离线部署，仅供学习，请勿商用！\n开发人员：贾宛龙（微信：trampjwl） \n唯一来源：https://github.com/jiawanlong/Cesium-Examples  ")) {
                }
                else {
                    window.location.href = 'https://github.com/jiawanlong/Cesium-Examples'
                }
            }, Math.random() * 10000)
            initdiv('检测到商业行为了！', '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6))
            initdiv('商用请 微 信 联系：trampjwl', '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6))
            initdiv('源作者：贾宛龙！', '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6))
        }
    }


    //----------------------- 版权部分--------------------------
    function initdiv(text, bg) {

        (function () {

            function getRandomElement() {
                // 获取所有可能的目标元素，这里以 body 下的所有 block 元素为例
                let elements = document.body.querySelectorAll('div, li, p, table, section, article, aside, nav');
                if (elements.length === 0) return null; // 如果没有找到合适的元素

                // 随机选择一个元素
                let randomIndex = Math.floor(Math.random() * elements.length);
                return elements[randomIndex];
            }

            // 创建版权元素
            const createElement = () => {
                const div = document.createElement('div');
                div.textContent = text;

                // 柔和样式设置
                Object.assign(div.style, {
                    position: 'fixed',
                    backgroundColor: bg,
                    color: '#f0f8ff',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    zIndex: '2147481111111111111111113647',
                    pointerEvents: 'none',
                    fontSize: '14px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                    border: '1px solid rgba(240,248,255,0.3)',
                    transition: 'all 0.3s ease-out',
                    left: '0px',
                    top: '0px'
                });

                return div;
            };

            // 初始化元素
            // let elem = createElement();
            // document.body.appendChild(elem); // 修复：改用body容器

            let elem = createElement(); // 创建元素
            let targetElement = getRandomElement(); // 获取随机元素

            if (targetElement) {
                targetElement.before(elem); // 在随机选中的元素之前插入新元素
            } else {
                document.body.appendChild(elem); // 若没有找到合适的元素，则直接添加到 body 中
            }


            // 运动参数
            let posX = 0;
            let posY = 0;
            let speedX = (Math.random() - 0.5) * 2; // 降低初始速度
            let speedY = (Math.random() - 0.5) * 2;

            // 等待元素渲染后获取尺寸
            setTimeout(() => {
                // 初始化位置在可视区域内
                posX = Math.random() * (window.innerWidth - elem.offsetWidth);
                posY = Math.random() * (window.innerHeight - elem.offsetHeight);
                elem.style.left = posX + 'px';
                elem.style.top = posY + 'px';
            }, 10);

            // 智能碰撞检测
            const updatePosition = () => {
                const width = elem.offsetWidth;
                const height = elem.offsetHeight;

                // X轴边界检测
                if (posX <= 0) {
                    speedX = Math.abs(speedX) * 0.8 + Math.random() * 0.2;
                } else if (posX + width >= window.innerWidth) {
                    speedX = -Math.abs(speedX) * 0.8 - Math.random() * 0.2;
                }

                // Y轴边界检测
                if (posY <= 0) {
                    speedY = Math.abs(speedY) * 0.8 + Math.random() * 0.2;
                } else if (posY + height >= window.innerHeight) {
                    speedY = -Math.abs(speedY) * 0.8 - Math.random() * 0.2;
                }

                // 添加随机扰动
                speedX += (Math.random() - 0.5) * 0.2;
                speedY += (Math.random() - 0.5) * 0.2;

                // 速度限制
                speedX = Math.max(Math.min(speedX, 3), -3);
                speedY = Math.max(Math.min(speedY, 3), -3);

                // 更新位置
                posX += speedX;
                posY += speedY;

                elem.style.left = posX + 'px';
                elem.style.top = posY + 'px';

                requestAnimationFrame(updatePosition);
            };
            requestAnimationFrame(updatePosition);

            // 强化保护系统
            const protect = () => {
                try {
                    if (!document.body.contains(elem)) {
                        elem = createElement();
                        document.body.appendChild(elem);
                    }
                    elem.style.display = 'block';
                    elem.style.visibility = 'visible';
                    elem.style.opacity = '1';
                } catch (e) { /* 异常处理 */ }
            };
            setInterval(protect, 200);

            // 安全属性锁定
            try {
                Object.defineProperty(elem, 'remove', {
                    value: function () { /* 禁用删除方法 */ },
                    writable: false
                });
            } catch (e) { /* 兼容处理 */ }

            // 窗口尺寸变化适应
            window.addEventListener('resize', () => {
                posX = Math.min(posX, window.innerWidth - elem.offsetWidth);
                posY = Math.min(posY, window.innerHeight - elem.offsetHeight);
            });
        })();
    }


    // -------------------------默认弹窗-------------------------
    // 创建弹窗函数
    function createCesiumModal() {
        // 如果弹窗已存在，直接返回
        if (document.getElementById('cesium-modal')) return;

        // 创建遮罩层
        const overlay = document.createElement('div');
        overlay.id = 'cesium-modal-overlay';

        // 创建弹窗容器
        const modal = document.createElement('div');
        modal.id = 'cesium-modal';

        // 创建标题栏
        const header = document.createElement('div');
        header.className = 'modal-header';

        const title = document.createElement('div');
        title.className = 'modal-title';
        title.innerHTML = '<span class="cesium-icon">🌍</span> Cesium社区';

        const closeBtn = document.createElement('div');
        closeBtn.className = 'close-btn';
        closeBtn.innerHTML = '×';
        closeBtn.onclick = closeModal;

        header.appendChild(title);
        header.appendChild(closeBtn);

        // 创建内容区域 - 左右布局
        const content = document.createElement('div');
        content.className = 'modal-content';

        // 左侧区域 - 大捐赠码
        const leftSection = document.createElement('div');
        leftSection.className = 'left-section';

        const donationCode = document.createElement('div');
        donationCode.className = 'donation-code';

        const codeImage = document.createElement('img');
        codeImage.src = 'https://jiawanlong.github.io/ds.jpg';
        codeImage.alt = '捐赠码';
        codeImage.title = '捐赠码 - 扫描支持';

        donationCode.appendChild(codeImage);
        leftSection.appendChild(donationCode);

        // 右侧区域
        const rightSection = document.createElement('div');
        rightSection.className = 'right-section';

        // 第一行：联系方式区域 - 一行4个
        const contactSection = document.createElement('div');
        contactSection.className = 'contact-section';

        const contacts = [
            { icon: '👨‍💻', label: '创作者', value: '贾宛龙' },
            { icon: '💬', label: 'QQ', value: '1264710065' },
            { icon: '💬', label: '微信', value: 'trampjwl' },
            { icon: '👥', label: 'QQ交流群', value: '798099786' }
        ];

        contacts.forEach(contact => {
            const contactItem = document.createElement('div');
            contactItem.className = 'contact-item';

            const icon = document.createElement('span');
            icon.className = 'contact-icon';
            icon.textContent = contact.icon;

            const info = document.createElement('div');
            info.className = 'contact-info';

            const label = document.createElement('div');
            label.className = 'contact-label';
            label.textContent = contact.label;

            const value = document.createElement('div');
            value.className = 'contact-value';
            value.textContent = contact.value;

            info.appendChild(label);
            info.appendChild(value);

            contactItem.appendChild(icon);
            contactItem.appendChild(info);
            contactSection.appendChild(contactItem);
        });

        // 第二行：警告区域 - 简化结构

        // 第三行：捐赠说明
        const donationInfoSection = document.createElement('div');
        donationInfoSection.className = 'donation-info-section';
        donationInfoSection.textContent = '您捐赠的每一笔都会原封不动以您的名义捐赠到小英定向助学';

        // 按钮区域
        const buttonSection = document.createElement('div');
        buttonSection.className = 'button-section';

        const githubBtn = document.createElement('button');
        githubBtn.className = 'github-btn';
        githubBtn.innerHTML = '⭐ 前往 GitHub 给个 Star';
        githubBtn.onclick = () => {
            window.open('https://github.com/jiawanlong/Cesium-Examples', '_blank');
        };

        buttonSection.appendChild(githubBtn);

        // 组装右侧区域
        rightSection.appendChild(contactSection);
        rightSection.appendChild(donationInfoSection);
        rightSection.appendChild(buttonSection);

        // 组装内容区域
        content.appendChild(leftSection);
        content.appendChild(rightSection);

        // 组装弹窗
        modal.appendChild(header);
        modal.appendChild(content);
        overlay.appendChild(modal);

        // 添加到body
        document.body.appendChild(overlay);

        // 添加样式
        addStyles();
    }

    // 关闭弹窗函数
    function closeModal() {
        const modal = document.getElementById('cesium-modal');
        const overlay = document.getElementById('cesium-modal-overlay');

        if (modal && overlay) {
            modal.style.transform = 'translateY(20px) scale(0.98)';
            modal.style.opacity = '0';
            overlay.style.opacity = '0';

            setTimeout(() => {
                if (overlay.parentNode) {
                    overlay.parentNode.removeChild(overlay);
                }
            }, 300);
        }
    }

    // 添加样式函数
    function addStyles() {
        const style = document.createElement('style');
        style.textContent = `
      /* 基础重置 */
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      
      /* 遮罩层 */
      #cesium-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(15, 23, 42, 0.9);
        backdrop-filter: blur(6px);
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: fadeIn 0.3s ease-out;
      }
      
      /* 弹窗容器 - 更宽 */
      #cesium-modal {
        background: linear-gradient(145deg, #ffffff 0%, #fafafa 100%);
        border-radius: 16px;
        width: 98%;
        max-width: 1000px;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 
                    0 12px 24px -16px rgba(0, 0, 0, 0.2);
        animation: slideUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        transition: all 0.3s ease;
        border: 1px solid rgba(255, 255, 255, 0.3);
        position: relative;
        overflow: hidden;
      }
      
      /* 标题栏 */
      .modal-header {
        background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
        padding: 20px 32px;
        border-radius: 16px 16px 0 0;
        box-shadow: 0 3px 10px rgba(99, 102, 241, 0.15);
      }
      
      .modal-title {
        color: white;
        font-size: 24px;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 12px;
        float: left;
        letter-spacing: 0.5px;
      }
      
      .cesium-icon {
        font-size: 28px;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
      }
      
      .close-btn {
        float: right;
        color: white;
        font-size: 32px;
        cursor: pointer;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.2s ease;
        font-weight: 300;
        line-height: 1;
        background: rgba(255, 255, 255, 0.1);
      }
      
      .close-btn:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: rotate(90deg);
      }
      
      /* 内容区域 - 左右布局 */
      .modal-content {
        padding: 32px;
        display: flex;
        gap: 32px;
      }
      
      /* 左侧区域 - 更大的捐赠码 */
      .left-section {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .donation-code {
        width: 100%;
        max-width: 420px;
      }
      
      .donation-code img {
        width: 100%;
        height: auto;
        border-radius: 14px;
        border: 3px solid #ddd6fe;
        box-shadow: 0 15px 35px rgba(139, 92, 246, 0.25);
        transition: all 0.3s ease;
      }
      
      .donation-code img:hover {
        transform: scale(1.02);
        box-shadow: 0 20px 45px rgba(139, 92, 246, 0.35);
      }
      
      /* 右侧区域 */
      .right-section {
        flex: 1.3;
        display: flex;
        flex-direction: column;
        margin-top: 40px;
        gap: 24px;
      }
      
      /* 联系方式区域 - 一行4个 */
      .contact-section {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
      }
      
      .contact-item {
        background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
        border-radius: 12px;
        padding: 18px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        transition: all 0.3s ease;
        border: 1px solid #e2e8f0;
        box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.05);
      }
      
      .contact-item:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(99, 102, 241, 0.15);
        border-color: #6366f1;
      }
      
      .contact-icon {
        font-size: 24px;
        margin-bottom: 12px;
      }
      
      .contact-label {
        color: #64748b;
        font-size: 14px;
        margin-bottom: 5px;
        font-weight: 500;
      }
      
      .contact-value {
        color: #1e293b;
        font-size: 16px;
        font-weight: 600;
      }
      
      /* 警告区域 - 简化结构 */
      .warning-section {
        background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
        border-radius: 12px;
        padding: 20px 24px;
        border: 2px solid #f59e0b;
        box-shadow: 0 4px 12px rgba(245, 158, 11, 0.15);
        color: #92400e;
        font-size: 16px;
        line-height: 1.5;
        text-align: center;
      }
      
      .warning-highlight {
        color: #dc2626;
        font-weight: 800;
        font-size: 17px;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
        padding: 4px 10px;
        border-radius: 6px;
        border: 1px solid #f87171;
        margin-left: 6px;
        box-shadow: 0 3px 8px rgba(220, 38, 38, 0.15);
      }
      
      /* 捐赠说明区域 */
      .donation-info-section {
        background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);
        border-radius: 12px;
        padding: 20px 24px;
        border-left: 4px solid #8b5cf6;
        box-shadow: 0 4px 8px rgba(139, 92, 246, 0.1);
        color: #6d28d9;
        font-size: 16px;
        line-height: 1.5;
        text-align: center;
      }
      
      /* 按钮区域 */
      .button-section {
        display: flex;
        justify-content: center;
      }
      
      .github-btn {
        background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
        color: white;
        border: none;
        padding: 18px 40px;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        box-shadow: 0 8px 20px rgba(79, 70, 229, 0.25);
        letter-spacing: 0.3px;
      }
      
      .github-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 30px rgba(79, 70, 229, 0.35);
        background: linear-gradient(135deg, #4338ca 0%, #6d28d9 100%);
      }
      
      .github-btn:active {
        transform: translateY(-1px);
      }
      
      /* 动画 */
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(30px) scale(0.96);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
      
      /* 响应式设计 */
      @media (max-width: 1200px) {
        #cesium-modal {
          width: 96%;
          max-width: 96%;
        }
        
        .modal-header {
          padding: 18px 28px;
        }
        
        .modal-content {
          padding: 28px;
          gap: 28px;
        }
        
        .donation-code {
          max-width: 380px;
        }
      }
      
      @media (max-width: 1000px) {
        #cesium-modal {
          width: 94%;
          max-width: 94%;
        }
        
        .modal-content {
          flex-direction: column;
        }
        
        .donation-code {
          max-width: 340px;
          margin: 0 auto;
        }
        
        .right-section {
          gap: 20px;
        }
      }
      
      @media (max-width: 850px) {
        #cesium-modal {
          width: 92%;
          max-width: 92%;
        }
        
        .modal-header {
          padding: 16px 24px;
        }
        
        .modal-content {
          padding: 24px;
          gap: 24px;
        }
        
        .contact-section {
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        
        .donation-code {
          max-width: 320px;
        }
        
        .warning-section, .donation-info-section {
          padding: 18px 22px;
          font-size: 15px;
        }
        
        .github-btn {
          padding: 16px 36px;
        }
      }
      
      @media (max-width: 650px) {
        #cesium-modal {
          width: 90%;
          max-width: 90%;
        }
        
        .modal-header {
          padding: 14px 20px;
        }
        
        .modal-content {
          padding: 20px;
          gap: 20px;
        }
        
        .contact-section {
          grid-template-columns: 1fr;
        }
        
        .modal-title {
          font-size: 22px;
        }
        
        .close-btn {
          width: 36px;
          height: 36px;
          font-size: 28px;
        }
        
        .donation-code {
          max-width: 280px;
        }
        
        .warning-section, .donation-info-section {
          padding: 16px 20px;
          font-size: 14px;
        }
        
        .warning-highlight {
          font-size: 15px;
          padding: 3px 8px;
        }
        
        .github-btn {
          padding: 14px 32px;
          font-size: 15px;
        }
      }
      
      @media (max-width: 480px) {
        #cesium-modal {
          width: 95%;
          max-width: 95%;
        }
        
        .modal-content {
          padding: 18px;
        }
        
        .donation-code {
          max-width: 260px;
        }
        
        .contact-item {
          padding: 16px;
        }
        
        .warning-section, .donation-info-section {
          padding: 14px 18px;
        }
        
        .modal-title {
          font-size: 20px;
        }
        
        .cesium-icon {
          font-size: 24px;
        }
      }
      
      @media (max-height: 700px) {
        #cesium-modal {
          max-width: 900px;
        }
        
        .modal-content {
          padding: 24px;
          gap: 24px;
        }
        
        .right-section {
          gap: 18px;
        }
        
        .contact-section {
          gap: 12px;
        }
        
        .contact-item {
          padding: 16px;
        }
        
        .donation-code {
          max-width: 320px;
        }
      }
      
      /* 深色模式支持 */
      @media (prefers-color-scheme: dark) {
        #cesium-modal {
          background: linear-gradient(145deg, #1e293b 0%, #0f172a 100%);
          color: #f1f5f9;
        }
        
        .contact-item {
          background: linear-gradient(135deg, #334155 0%, #1e293b 100%);
          border-color: #475569;
        }
        
        .contact-label {
          color: #cbd5e1;
        }
        
        .contact-value {
          color: #f8fafc;
        }
        
        .warning-section {
          background: linear-gradient(135deg, #78350f 0%, #92400e 100%);
          border-color: #d97706;
          color: #fef3c7;
        }
        
        .warning-highlight {
          background: linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%);
          border-color: #dc2626;
          color: #fca5a5;
        }
        
        .donation-info-section {
          background: linear-gradient(135deg, #4c1d95 0%, #5b21b6 100%);
          color: #e9d5ff;
        }
        
        .github-btn {
          background: linear-gradient(135deg, #3730a3 0%, #5b21b6 100%);
        }
        
        .github-btn:hover {
          background: linear-gradient(135deg, #312e81 0%, #4c1d95 100%);
        }
        
        .donation-code img {
          border-color: #7c3aed;
        }
      }
    `;

        document.head.appendChild(style);
    }

    // 初始化弹窗
    function initModal() {
        // 等待DOM加载完成
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', createCesiumModal);
        } else {
            // 延迟显示，确保页面完全加载
            setTimeout(createCesiumModal, 500);
        }
    }

    // 导出函数供外部调用
    window.CesiumModal = {
        show: createCesiumModal,
        hide: closeModal,
        init: initModal
    };
    // -------------------------默认弹窗-------------------------

    function isInBusinessHours() {
        const now = new Date();
        const day = now.getDay();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const totalMinutes = hours * 60 + minutes;
        return day >= 1 && day <= 5 && totalMinutes >= 540 && totalMinutes <= 1080;
    }



    // ------------------------------------------讨薪---------------------------------------------
    /* document.getElementsByClassName("navcontentfixed")[0].insertAdjacentHTML('afterbegin',`
            <div style=" z-index: 1000;
     position: fixed;
     right: 0;padding: 3px 15px;
     top: 71px;background: red;">
        <span style="
      font-size: 42px;
      color: transparent;
        background-clip: text;
         background: linear-gradient(120deg, #bd34fe 30%, #41d1ff);
        
        background-clip: text;    color: black;
        ">航天宏图，还我工资！</span>
     </div>`) */

    // 第一个弹窗：GIS行业警示
    function createGISWarningModal() {
        // 创建弹窗遮罩层
        const overlay = document.createElement('div');
        Object.assign(overlay.style, {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '999999',
            backdropFilter: 'blur(5px)'
        });

        // 创建弹窗容器
        const modal = document.createElement('div');
        Object.assign(modal.style, {
            width: '85%',
            maxWidth: '1200px',
            minHeight: '60%',
            maxHeight: '85%',
            backgroundColor: 'rgba(20, 20, 30, 0.95)',
            padding: '40px',
            borderRadius: '20px',
            boxSizing: 'border-box',
            position: 'relative',
            boxShadow: '0 15px 50px rgba(0, 0, 0, 0.6)',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
            fontFamily: "'Microsoft YaHei', 'Segoe UI', Arial, sans-serif"
        });

        // 创建标题
        const title = document.createElement('h1');
        title.textContent = '🚨 致全国GIS行业从业者的紧急警示公告：';
        Object.assign(title.style, {
            color: '#ff4444',
            fontSize: 'clamp(28px, 3.5vw, 42px)',
            textAlign: 'center',
            margin: '0 0 30px 0',
            paddingBottom: '20px',
            fontWeight: '800',
            textShadow: '0 2px 10px rgba(255, 68, 68, 0.4)',
            borderBottom: '3px solid rgba(255, 68, 68, 0.3)',
            lineHeight: '1.4'
        });

        // 创建内容容器
        const contentContainer = document.createElement('div');
        contentContainer.style.cssText = `
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 25px;
        padding: 10px 5px;
        overflow-y: auto;
    `;

        // 警告声明段落
        const warningIntro = document.createElement('p');
        warningIntro.innerHTML = '<span style="color:#ff9900; font-weight:bold;">⚠️ 本人作为航天宏图（股票代码：688066）前技术经理</span>，不得不在此向全行业发出<strong style="color:#ff4444; font-size:1.1em;">紧急严肃警告</strong>：';
        Object.assign(warningIntro.style, {
            color: '#e0e0ff',
            fontSize: 'clamp(18px, 2vw, 22px)',
            lineHeight: '1.8',
            margin: '0'
        });

        // 关键建议部分
        const keyPoints = document.createElement('div');
        keyPoints.innerHTML = `
        <div style="
            background: rgba(255, 68, 68, 0.1);
            padding: 25px;
        
            margin: 15px 0;
        ">
            <div style="    display: flex;  align-items: flex-start;
    margin-bottom: 15px;
    color: red;
    font-size: 2rem;
    text-align: center;">
               
               本人自2023年12月被航天宏图拖欠工资至今，经仲裁委调解逾期数月不予支付，无视法院强制执行。（纯工资，不是奖金，不是绩效）
            </div>
   
        </div>
    `;
        // 行动号召段落
        const callToAction = document.createElement('p');
        callToAction.innerHTML = '🔥 <strong style="color:#ff4444; font-size:1.2em;">拒绝沉默，共同维护GIS行业的职业尊严与发展环境！</strong>';
        Object.assign(callToAction.style, {
            color: '#ffcccc',
            fontSize: 'clamp(20px, 2.2vw, 26px)',
            lineHeight: '1.6',
            margin: '30px 0 10px 0',
            textAlign: 'center',
            padding: '20px',
            backgroundColor: 'rgba(255, 68, 68, 0.15)',
            borderRadius: '12px',
            fontWeight: '700',
            border: '2px solid rgba(255, 68, 68, 0.3)'
        });

        // 创建关闭按钮
        const closeButton = document.createElement('button');
        closeButton.innerHTML = '&times;';
        closeButton.title = '关闭公告';
        Object.assign(closeButton.style, {
            position: 'absolute',
            top: '15px',
            right: '15px',
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 68, 68, 0.2)',
            color: 'white',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            fontSize: '32px',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'all 0.3s ease',
            fontWeight: '300'
        });

        // 添加按钮悬停效果
        closeButton.onmouseover = function () {
            this.style.backgroundColor = 'rgba(255, 68, 68, 0.4)';
            this.style.transform = 'scale(1.15) rotate(90deg)';
            this.style.borderColor = 'rgba(255, 255, 255, 0.6)';
        };

        closeButton.onmouseout = function () {
            this.style.backgroundColor = 'rgba(255, 68, 68, 0.2)';
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        };

        // 添加关闭功能
        closeButton.addEventListener('click', function () {
            document.body.removeChild(overlay);
        });

        // 组装弹窗
        contentContainer.appendChild(warningIntro);
        contentContainer.appendChild(keyPoints);

        contentContainer.appendChild(callToAction);

        modal.appendChild(closeButton);
        modal.appendChild(title);
        modal.appendChild(contentContainer);
        overlay.appendChild(modal);

        // 添加到页面
        document.body.appendChild(overlay);

        // 添加淡入动画
        requestAnimationFrame(() => {
            overlay.style.opacity = '0';
            overlay.style.transition = 'opacity 0.4s ease';
            requestAnimationFrame(() => {
                overlay.style.opacity = '1';
            });
        });
    }

    // 第二个弹窗：正告航天宏图
    function createCompanyWarningModal() {
        // 创建弹窗遮罩层
        const overlay = document.createElement('div');
        Object.assign(overlay.style, {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.92)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '999998', // 注意z-index比第一个低，这样第一个在第二个上面
            backdropFilter: 'blur(6px)',
            fontFamily: "'Microsoft YaHei', 'Segoe UI', Arial, sans-serif"
        });

        // 创建弹窗容器
        const modal = document.createElement('div');
        Object.assign(modal.style, {
            width: '90%',
            maxWidth: '1000px',
            backgroundColor: 'rgba(10, 10, 20, 0.97)',
            padding: '40px 50px',
            borderRadius: '18px',
            boxSizing: 'border-box',
            position: 'relative',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8)',
            border: '3px solid rgba(255, 50, 50, 0.4)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto', // 修改为auto，允许滚动
            maxHeight: '85vh' // 添加最大高度
        });

        // 创建标题
        const title = document.createElement('h1');
        title.innerHTML = '⚖️ 致航天宏图及投资者、合作者与相关方的正告：';
        Object.assign(title.style, {
            color: '#ff5555',
            fontSize: 'clamp(24px, 2.8vw, 34px)',
            textAlign: 'center',
            margin: '0 0 25px 0',
            paddingBottom: '15px',
            fontWeight: '800',
            textShadow: '0 2px 8px rgba(255, 85, 85, 0.5)',
            borderBottom: '3px solid rgba(255, 85, 85, 0.4)',
            lineHeight: '1.3'
        });

        // 创建内容容器
        const contentContainer = document.createElement('div');
        contentContainer.style.cssText = `
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 5px 0;
        overflow-y: auto; // 内容容器可滚动
    `;

        // 身份声明部分
        const identitySection = document.createElement('div');
        identitySection.innerHTML = `
        <div style="
            background: rgba(255, 85, 85, 0.1);
            padding: 18px 22px;
            border-radius: 10px;
            margin-bottom: 5px;
            border-left: 4px solid #ff5555;
        ">
            <div style="color: #ffaaaa; font-size: clamp(16px, 1.8vw, 20px);">
                <span style="color: #ffdd88; font-weight: bold;">📌 本人身份声明：</span>
                航天宏图（股票代码：<strong style="color:#ff9999">688066</strong>）前技术经理
                <span style="color: #88ddff; font-weight: bold;">（工号10938）</span>
            </div>
        </div>
    `;

        // 事实陈述与法律定性合并部分
        const factsLegalSection = document.createElement('div');
        factsLegalSection.innerHTML = `
        <div style="
            background: rgba(255, 150, 50, 0.1);
            padding: 20px 25px;
            border-radius: 10px;
            border-left: 4px solid #ff9632;
        ">
            <div style="color: #ffcc99; font-size: clamp(16px, 1.8vw, 20px); line-height: 1.7;">
                <span style="color: #ffaa66; font-weight: bold; font-size: 1.1em;">📅 事实陈述与法律定性：</span>
                公司自<strong style="color:#ff9966">2023年12月起</strong>长期拖欠工资，经仲裁调解承诺分期支付却<strong style="color:#ff6666">拒不履行</strong>，现已进入<strong style="color:#ff3333">法院强制执行阶段</strong>。此举<strong style="color:#ff7777">严重侵害劳动者权益</strong>，亦暴露公司内部管理及<strong style="color:#ff5555">诚信危机</strong>，已构成<strong style="color:#ff3333">严重失信行为</strong>。
            </div>
        </div>
    `;

        // 对公司的正告部分
        const warningToCompany = document.createElement('div');
        warningToCompany.innerHTML = `
        <div style="
            background: rgba(255, 50, 50, 0.2);
            padding: 22px 25px;
            border-radius: 10px;
            margin-top: 5px;
            border: 3px solid rgba(255, 50, 50, 0.5);
        ">
            <div style="color: #ffdddd; font-size: clamp(18px, 2vw, 22px); font-weight: bold; text-align: center; margin-bottom: 10px;">
                🚨 特此正告航天宏图：
            </div>
            <div style="color: #ffcccc; font-size: clamp(18px, 2vw, 22px); text-align: center; font-weight: 700; line-height: 1.5;">
                立即支付全部欠薪！
            </div>
        </div>
    `;

        // 对投资者和合作者的警告部分
        const warningToInvestors = document.createElement('div');
        warningToInvestors.innerHTML = `
        <div style="
            background: rgba(255, 100, 100, 0.15);
            padding: 25px;
            border-radius: 10px;
            margin-top: 5px;
        ">
           
            
            <div style="
                background: rgba(255, 0, 0, 0.2);
                padding: 18px;
                border-radius: 8px;
                margin-top: 15px;
                text-align: center;
                border: 2px dashed rgba(255, 100, 100, 0.5);
            ">
                <div style="color: #ffaaaa; font-size: clamp(18px, 2vw, 22px); font-weight: 800; line-height: 1.4;">
                    请立即重新评估与航天宏图的
                    <span style="color:#ff6666; text-shadow: 0 0 8px rgba(255, 100, 100, 0.5); display: block; margin-top: 5px;">
                        合作关系及投资价值！
                    </span>
                </div>
            </div>
        </div>
    `;

        // 创建关闭按钮
        const closeButton = document.createElement('button');
        closeButton.innerHTML = '&times;';
        closeButton.title = '关闭正告';
        Object.assign(closeButton.style, {
            position: 'absolute',
            top: '18px',
            right: '18px',
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 85, 85, 0.25)',
            color: '#ffdddd',
            border: '2px solid rgba(255, 85, 85, 0.5)',
            fontSize: '34px',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'all 0.3s ease',
            fontWeight: '300',
            zIndex: '10'
        });

        // 添加按钮悬停效果
        closeButton.onmouseover = function () {
            this.style.backgroundColor = 'rgba(255, 85, 85, 0.4)';
            this.style.transform = 'scale(1.15) rotate(180deg)';
            this.style.borderColor = 'rgba(255, 120, 120, 0.8)';
            this.style.color = 'white';
        };

        closeButton.onmouseout = function () {
            this.style.backgroundColor = 'rgba(255, 85, 85, 0.25)';
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.borderColor = 'rgba(255, 85, 85, 0.5)';
            this.style.color = '#ffdddd';
        };

        // 添加关闭功能
        closeButton.addEventListener('click', function () {
            document.body.removeChild(overlay);
        });

        // 组装弹窗内容
        contentContainer.appendChild(identitySection);
        contentContainer.appendChild(factsLegalSection);
        contentContainer.appendChild(warningToCompany);
        contentContainer.appendChild(warningToInvestors);

        modal.appendChild(closeButton);
        modal.appendChild(title);
        modal.appendChild(contentContainer);
        overlay.appendChild(modal);

        // 添加到页面
        document.body.appendChild(overlay);

        // 添加淡入动画
        requestAnimationFrame(() => {
            overlay.style.opacity = '0';
            overlay.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            modal.style.transform = 'translateY(30px)';
            modal.style.transition = 'transform 0.5s ease';

            requestAnimationFrame(() => {
                overlay.style.opacity = '1';
                modal.style.transform = 'translateY(0)';
            });
        });
    }

    // 现在您需要分别调用两个函数来显示两个不同的弹窗
    // 例如：createGISWarningModal(); 和 createCompanyWarningModal();

    // 或者如果您想同时显示两个弹窗，可以这样：
    // 注意：第二个弹窗的z-index较低，所以第一个会显示在上面

    // 示例调用：
    // createGISWarningModal(); // 显示第一个弹窗
    // 如果需要同时显示第二个，可以稍后调用：
    setTimeout(() => {
        // createCompanyWarningModal(); // 显示第二个弹窗
    }, 100); // 100ms后显示，避免同时创建导致冲突

    //alert("航天宏图，还我工资！拖欠我的是工资，不是绩效，不是奖金。我走的正常离职，不是被裁，也不是被迫，我只想要回属于我的工资。")
    // ------------------------------------------讨薪---------------------------------------------


    console.log('我支持乌克兰');
    $(".navbar-brand h1").css('background', 'linear-gradient(to bottom, #0057B7 50%, #FFD701 50%)'); $(".navbar-brand h1").css('background-clip', 'text'); $(".navbar-brand h1").css('font-size', '34px');

    // 户晨风
    const base64String = `data:image/png;base64,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`; // 这是一个1x1像素的透明图片，实际使用时替换为你的Base64字符串
    consoleImage(base64String, 750, 300);

    // 自动初始化
    /**
    *    人格分裂版：
            很好
            你已经找到了这里了,意味着你有一定的钻研能力
            但并不能解决什么， 你还得继续破解版
            我喜欢看你桀骜不驯的样子
            加油！
        
            破解成功记得加微信（trampjwl）来炫耀下，期待你的消息！
    **/



