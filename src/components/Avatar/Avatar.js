import React, { useRef } from "react";
import * as d3 from "d3";
import * as flubber from "flubber";
import avatarSvg from "../../assets/SvgPaths/AvatarSvg/avatarSvg";
import avatarStyles from "../../assets/SvgStyles/AvatarStyles/avatarStyle";

const Avatar = () => {
  const mouthIndex = useRef(0);
  const facialHairIndex = useRef(0);
  const headHairIndex = useRef(0);
  const eyesIndex = useRef(0);

  const tweenPahs = (pathId, path1, path2, fill) => {
    var interpolator = flubber.interpolate(path1, path2);
    d3.select(pathId)
      .transition()
      .attr("fill", fill !== undefined ? fill : null)
      .attrTween("d", function () {
        return interpolator;
      });
  };

  const addPath = (pathId, opacity, path, delay) => {
    d3.select(pathId)
      .attr("d", "")
      .transition()
      .delay(delay)
      .style("opacity", opacity)
      .attr("d", path);
  };

  const removePath = (pathId, opacity, delay) => {
    d3.select(pathId)
      .transition()
      .delay(delay)
      .style("opacity", opacity)
      .attr("d", "");
  };

  const handleClick = (e) => {
    if (!e.target.href) return null;

    const pathId = e.target.href.baseVal;
    let pathOne, pathTwo;

    switch (pathId) {
      case "#mouth":
      case "#tounge":
      case "#teeth":
        pathOne = mouthIndex.current;
        pathTwo = mouthIndex.current + 1;
        if (pathOne === avatarSvg.face.mouth.length - 1) {
          pathTwo = 0;
        }

        tweenPahs(
          "#mouth",
          avatarSvg.face.mouth[pathOne].mouth.d,
          avatarSvg.face.mouth[pathTwo].mouth.d
        );

        if (avatarSvg.face.mouth[pathTwo].teeth) {
          addPath(
            "#teeth",
            1,
            avatarSvg.face.mouth[pathTwo].teeth.d,
            avatarSvg.face.mouth[pathTwo].teeth.delayTime
          );
        } else {
          removePath("#teeth", 0, 80);
        }

        if (avatarSvg.face.mouth[pathTwo].tounge) {
          addPath(
            "#tounge",
            1,
            avatarSvg.face.mouth[pathTwo].tounge.d,
            avatarSvg.face.mouth[pathTwo].tounge.delayTime
          );
        } else {
          removePath("#tounge", 0, 80);
        }

        mouthIndex.current = pathTwo;
        break;
      case "#hair-face":
        pathOne = facialHairIndex.current;
        pathTwo = facialHairIndex.current + 1;

        if (pathOne === avatarSvg.face.hair.length - 1) {
          pathTwo = 0;
        }

        tweenPahs(
          "#hair-face",
          avatarSvg.face.hair[pathOne].d,
          avatarSvg.face.hair[pathTwo].d
        );

        facialHairIndex.current = pathTwo;

        break;
      case "#hair-head":
        pathOne = headHairIndex.current;
        pathTwo = headHairIndex.current + 1;

        if (pathOne === avatarSvg.head.hair.length - 1) {
          pathTwo = 0;
        }

        tweenPahs(
          "#hair-head",
          avatarSvg.head.hair[pathOne].d,
          avatarSvg.head.hair[pathTwo].d
        );

        headHairIndex.current = pathTwo;
        break;
      case "#eye-left":
      case "#eye-left-inner":
      case "#eye-left-twinkle":
      case "#eye-right":
      case "#eye-right-inner":
      case "#eye-right-twinkle":
        // alert("clicked eyes");
        pathOne = eyesIndex.current;
        pathTwo = eyesIndex.current + 1;

        if (pathOne === avatarSvg.face.eyes.length - 1) {
          pathTwo = 0;
        }

        tweenPahs(
          "#eye-left",
          avatarSvg.face.eyes[pathOne].leftEye.d,
          avatarSvg.face.eyes[pathTwo].leftEye.d,
          avatarSvg.face.eyes[pathTwo].leftEye.fill
        );
        tweenPahs(
          "#eye-right",
          avatarSvg.face.eyes[pathOne].rightEye.d,
          avatarSvg.face.eyes[pathTwo].rightEye.d,
          avatarSvg.face.eyes[pathTwo].rightEye.fill
        );

        if (avatarSvg.face.eyes[pathTwo].leftEyeInner) {
          addPath(
            "#eye-right-inner",
            1,
            avatarSvg.face.eyes[pathTwo].rightEyeInner.d,
            0
          );
          addPath(
            "#eye-left-inner",
            1,
            avatarSvg.face.eyes[pathTwo].leftEyeInner.d,
            0
          );
        } else {
          removePath("#eye-right-inner", 0, 80);
          removePath("#eye-left-inner", 0, 80);
        }

        if (avatarSvg.face.eyes[pathTwo].leftEyeTwinkle) {
          addPath(
            "#eye-right-twinkle",
            1,
            avatarSvg.face.eyes[pathTwo].rightEyeTwinkle.d,
            0
          );
          addPath(
            "#eye-left-twinkle",
            1,
            avatarSvg.face.eyes[pathTwo].leftEyeTwinkle.d,
            0
          );
        } else {
          removePath("#eye-left-twinkle", 0, 80);
          removePath("#eye-right-twinkle", 0, 80);
        }

        eyesIndex.current = pathTwo;
        break;
      default:
        return null;
    }
  };

  return (
    <svg
      version="1.1"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 640 640"
      width="100%"
      height="100%"
      onClick={handleClick}
      style={{ filter: "drop-shadow(0 0 0.6rem black)" }}
    >
      {[avatarSvg].map((avatar) => {
        return (
          <defs>
            <path d={avatar.head.main.d} id={avatar.head.main.id}></path>
            <path
              d={avatar.head.hair[0].d}
              id={avatar.head.hair[0].id}
              style={styles.clickable}
            ></path>
            <path
              d={avatar.face.hair[0].d}
              id={avatar.face.hair[0].id}
              style={styles.clickable}
            ></path>
            <path d={avatar.neck.main.d} id={avatar.neck.main.id}></path>
            <path d={avatar.neck.shadow.d} id={avatar.neck.shadow.id}></path>
            <path d={avatar.face.nose.d} id={avatar.face.nose.id}></path>
            {avatar.face.eyeBrows.map((brow) => {
              return <path d={brow.d} id={brow.id}></path>;
            })}
            <path d="" id="eye-right-twinkle" style={styles.clickable}></path>
            <path d="" id="eye-right-inner" style={styles.clickable}></path>
            <path
              d={avatar.face.eyes[0].rightEye.d}
              id={avatar.face.eyes[0].rightEye.id}
              style={styles.clickable}
            ></path>
            <path d="" id="eye-left-twinkle" style={styles.clickable}></path>
            <path d="" id="eye-left-inner" style={styles.clickable}></path>
            <path
              d={avatar.face.eyes[0].leftEye.d}
              id={avatar.face.eyes[0].leftEye.id}
              style={styles.clickable}
            ></path>

            <path
              d={avatar.face.mouth[0].mouth.d}
              id={avatar.face.mouth[0].mouth.id}
              style={styles.clickable}
            ></path>
            <path
              d={avatar.face.mouth[0].tounge.d}
              id={avatar.face.mouth[0].tounge.id}
              style={styles.clickable}
            ></path>
            <path
              d={avatar.face.mouth[0].teeth.d}
              id={avatar.face.mouth[0].teeth.id}
              style={styles.clickable}
            ></path>
            {avatar.clothes.map((cloth) => {
              return <path d={cloth.d} id={cloth.id}></path>;
            })}
          </defs>
        );
      })}
      <g>
        {avatarStyles.map((style) => {
          return (
            <g>
              <use
                href={style.href}
                opacity={style.opacity}
                fill={style.fill}
                fillOpacity={style.fillOpacity}
              ></use>
            </g>
          );
        })}
      </g>
    </svg>
  );
};

export default Avatar;

const styles = {
  clickable: {
    cursor: "pointer",
  },
};
