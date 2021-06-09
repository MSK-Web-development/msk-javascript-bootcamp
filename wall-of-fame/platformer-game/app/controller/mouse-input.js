export default class MouseInput {
  constructor(id, action) {
    this.actions = this.holdit(document.getElementById(id), action, 1000, 2);
  }

  holdit(btn, action, start, speedup) {
    let timeout;

    const clear = () => {
      clearTimeout(timeout);
    };

    const preventDefault = (e) => {
      if (e.preventDefault) {
        e.preventDefault();
      }
    };

    const repeat = function () {
      action("keydown");

      timeout = setTimeout(repeat, start);
      start = start / speedup;
    };

    try {
      btn.ontouchstart = function (e) {
        preventDefault(e);

        repeat();
      };

      btn.ontouchend = function (e) {
        preventDefault(e);
        action("keyup");

        clear();
      };
    } catch (error) {
      console.error("Error in mouse input", error);
    }
    return { clear };
  }
}
