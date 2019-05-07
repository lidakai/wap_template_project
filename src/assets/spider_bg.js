(function () {
  const spider = {
    init:function (element,zIndex,opacity,rgb,count) {
      this.element = element;
      this.zIndex = zIndex||0;
      this.opacity = opacity||0.5;//线条的透明度
      this.rgb = rgb||"0,0,0";//线条的rgb三色
      this.count = count||200;
      this.creative_canvas();
      this.run();
    },
    set_canvas_size:function () {
      //设置canvas画布尺寸
      let element = document.getElementById("bg_canvas_id");
      this.canvas_width = parseInt(element.currentStyle ? element.currentStyle["width"] : getComputedStyle(element, false)["width"]);
      this.canvas_height = this.the_canvas.height = parseInt(element.currentStyle ? element.currentStyle["height"] : getComputedStyle(element, false)["height"]);
      this.the_canvas.width = this.canvas_width;
      this.the_canvas.height = this.canvas_height;
      element.appendChild(this.the_canvas);
    },
    creative_canvas:function () {
      //创建画布，并添加到指定元素中
      this.the_canvas = document.createElement("canvas"); //画布
      this.context = this.the_canvas.getContext("2d");
      this.the_canvas.id = "canvas_"+Math.ceil(Math.random()*100);
      this.the_canvas.style.cssText = "position:fixed;top:0;left:0;z-index:" + this.zIndex + ";opacity:" + this.opacity;
      this.set_canvas_size();
    },
    animate_func:function (callback) {
      //动画执行
      window.requestAnimationFrame = (function() {
        return window.requestAnimationFrame ||
          window["webkitRequestAnimationFrame"] ||
          window["mozRequestAnimationFrame"] ||
          window["oRequestAnimationFrame"] ||
          window["msRequestAnimationFrame"] || function(callback) {
            window.setTimeout(callback, 1000 / 60);
          };
      })();
      const anim = function() {
        this.draw_canvas();
        window.requestAnimationFrame(anim);
      }.bind(this);
      window.requestAnimationFrame(anim);
    },
    draw_canvas:function () {
      let self = this;
      this.context.clearRect(0, 0, this.canvas_width, this.canvas_height);
      //随机的线条和当前位置联合数组
      let e, i, d, x_dist, y_dist, dist; //临时节点
      //遍历处理每一个点
      this.random_lines.forEach(function(r, idx) {
        r.x += r.xa,
          r.y += r.ya, //移动
          r.xa *= r.x > self.canvas_width || r.x < 0 ? -1 : 1,
          r.ya *= r.y > self.canvas_height || r.y < 0 ? -1 : 1, //碰到边界，反向反弹
          self.context.fillRect(r.x - 0.5, r.y - 0.5, 1, 1); //绘制一个宽高为1的点
        //从下一个点开始
        for (i = idx + 1; i < self.all_array.length; i++) {
          e = self.all_array[i];
          //不是当前点
          if (null !== e.x && null !== e.y) {
            x_dist = r.x - e.x, //x轴距离 l
              y_dist = r.y - e.y, //y轴距离 n
              dist = x_dist * x_dist + y_dist * y_dist; //总距离, m
            dist < e.max && (e === self.current_point && dist >= e.max / 2 && (r.x -= 0.03 * x_dist, r.y -= 0.03 * y_dist), //靠近的时候加速
              d = (e.max - dist) / e.max,
              self.context.beginPath(),
              self.context.lineWidth = d / 2,
              self.context.strokeStyle = "rgba(" + self.rgb + "," + (self.opacity + 0.2) + ")",
              self.context.moveTo(r.x, r.y),
              self.context.lineTo(e.x, e.y),
              self.context.stroke());
          }
        }
      })
    },
    run:function () {
      let self = this;
      this.all_array=[];//所有点的集合
      this.random_lines = [];//程序生成点集合
      this.current_point ={
        x: null, //当前鼠标x
        y: null, //当前鼠标y
        max: 20000
      };

      //随机生成this.count条线位置信息
      for (let i = 0; this.count > i; i++) {
        let x = Math.random() * this.canvas_width, //随机位置
          y = Math.random() * this.canvas_height,
          xa = 2 * Math.random() - 1, //随机运动方向
          ya = 2 * Math.random() - 1;
        this.random_lines.push({
          x: x,
          y: y,
          xa: xa,
          ya: ya,
          max: 3000 //沾附距离
        });
      }

      this.all_array = this.random_lines.concat([this.current_point]);

      //当时鼠标位置存储，离开的时候，释放当前位置信息
      window.onmousemove = function(e) {
        e = e || window.event, self.current_point.x = e.clientX, self.current_point.y = e.clientY;
      };
      window.onmouseout = function() {
        self.current_point.x = null, self.current_point.y = null;
      };

      window.onresize = function () {
        self.set_canvas_size();
      };
      this.animate_func(this.draw_canvas);
    }
  };

  window.spider = spider;
})();

