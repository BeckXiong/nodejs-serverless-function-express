
function sayyes(messageType) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        text-align: center;
    `;
    
    // Embed the SVG content directly
    const svgContent = `
        <svg id="1726131792938" height="70px"  viewBox="4.616 176.495 458.382 121.899">
            <path id="namePath" fill="none" stroke="black" stroke-width="3" d="M 35.58 200.59 L 35.58 209.36 L 20.89 209.36 L 20.89 214.64 L 35.58 214.64 L 35.58 224.63 L 17.56 224.63 L 17.56 230.31 L 37.45 230.31 C 32.42 236.16 24.87 240.95 14.8 244.76 L 17.88 249.72 C 29.57 244.6 38.1 238.11 43.46 230.31 L 60.92 230.31 C 66.2 238.27 75.05 244.68 87.55 249.56 L 90.07 244.36 C 79.76 240.95 72.12 236.24 67.09 230.31 L 87.23 230.31 L 87.23 224.63 L 67.9 224.63 L 67.9 214.64 L 83.82 214.64 L 83.82 209.36 L 67.9 209.36 L 67.9 200.51 L 62.22 200.51 L 62.22 209.36 L 41.27 209.36 L 41.27 200.59 L 35.58 200.59 Z M 41.27 224.63 L 41.27 214.64 L 62.22 214.64 L 62.22 224.63 L 41.27 224.63 Z M 30.39 248.91 C 27.63 255.65 24.38 261.41 20.64 266.28 L 25.43 269.69 C 29.33 264.58 32.66 258.49 35.5 251.42 L 30.39 248.91 Z M 73.59 245.9 L 68.47 247.61 C 72.29 254.18 75.86 261.74 79.11 270.34 L 84.38 267.91 C 81.3 260.11 77.73 252.8 73.59 245.9 Z M 60.67 248.09 L 55.56 249.72 C 58.64 255.97 61.41 263.12 64 271.24 L 69.36 268.88 C 66.93 261.49 64 254.59 60.67 248.09 Z M 43.87 274.57 C 48.09 274.57 50.28 272.13 50.28 267.42 L 50.28 238.35 L 44.35 238.35 L 44.35 265.88 C 44.35 268.15 43.46 269.37 41.84 269.37 C 39.48 269.37 37.05 269.21 34.45 268.96 L 35.75 274.57 L 43.87 274.57 Z M 101.06 215.7 L 101.06 220.4 L 161.47 220.4 L 161.47 215.7 L 134.11 215.7 L 134.11 210.42 L 164.15 210.42 L 164.15 205.63 L 134.11 205.63 L 134.11 200.43 L 128.43 200.43 L 128.43 205.63 L 98.46 205.63 L 98.46 210.42 L 128.43 210.42 L 128.43 215.7 L 101.06 215.7 Z M 113.57 239.32 L 116.16 245.25 L 95.05 245.25 L 95.05 250.12 L 167.48 250.12 L 167.48 245.25 L 146.53 245.25 L 149.86 239.32 L 156.68 239.32 L 156.68 224.71 L 105.85 224.71 L 105.85 239.32 L 113.57 239.32 Z M 143.69 239.32 L 140.44 245.25 L 122.25 245.25 L 119.66 239.32 L 143.69 239.32 Z M 151.08 235.02 L 111.46 235.02 L 111.46 229.01 L 151.08 229.01 L 151.08 235.02 Z M 157.9 254.83 L 104.63 254.83 L 104.63 274.97 L 110.32 274.97 L 110.32 271.64 L 152.3 271.64 L 152.3 274.97 L 157.9 274.97 L 157.9 254.83 Z M 110.32 266.85 L 110.32 259.62 L 152.3 259.62 L 152.3 266.85 L 110.32 266.85 Z M 223.05 199.7 L 223.05 275.54 L 246.68 275.54 C 238 264.82 233.69 252.24 233.69 237.62 C 233.69 223 238 210.34 246.68 199.7 L 223.05 199.7 Z M 290.66 200.59 L 290.66 234.13 L 283.92 234.13 L 283.92 239.81 L 290.66 239.81 L 290.66 266.77 C 290.66 268.07 289.76 269.04 288.14 269.69 L 290.74 274.97 C 298.37 272.86 305.11 270.1 310.96 266.69 L 309.9 261.09 C 305.35 263.85 300.81 265.96 296.34 267.58 L 296.34 239.81 L 304.95 239.81 C 309.74 254.75 316.88 266.04 326.3 273.83 L 330.28 269.37 C 321.59 262.47 314.85 252.64 310.14 239.81 L 328.9 239.81 L 328.9 234.13 L 296.34 234.13 L 296.34 200.59 L 290.66 200.59 Z M 321.67 204.73 C 316.96 211.88 309.9 218.29 300.32 223.98 L 303.73 228.52 C 313.55 222.68 320.86 216.18 325.73 208.96 L 321.67 204.73 Z M 264.35 227.31 L 279.37 227.31 L 279.37 203.76 L 256.55 203.76 L 256.55 209.2 L 273.77 209.2 L 273.77 221.87 L 259.15 221.87 L 256.63 245.58 L 274.82 245.58 C 274.82 255.24 274.42 261.57 273.77 264.58 C 272.95 267.5 270.19 269.04 265.48 269.04 C 263.21 269.04 261.02 268.88 258.91 268.72 L 260.37 274.08 C 262.48 274.24 264.67 274.4 266.78 274.4 C 274.09 274.08 278.23 271.64 279.21 267.01 C 280.1 262.71 280.59 253.78 280.59 240.3 L 262.8 240.3 L 264.35 227.31 Z M 338.68 203.92 L 338.68 209.28 L 390.48 209.28 L 390.48 232.75 L 396.41 232.75 L 396.41 209.28 L 405.42 209.28 L 405.42 203.92 L 338.68 203.92 Z M 347.36 214.72 L 347.36 230.88 L 378.14 230.88 L 378.14 214.72 L 347.36 214.72 Z M 372.7 226.66 L 352.8 226.66 L 352.8 219.02 L 372.7 219.02 L 372.7 226.66 Z M 335.51 236.32 L 335.51 241.76 L 390.64 241.76 L 390.64 265.55 C 390.64 268.31 389.26 269.69 386.58 269.69 C 383.82 269.69 380.9 269.53 377.81 269.29 L 379.03 274.73 L 388.53 274.73 C 393.89 274.73 396.57 272.13 396.57 266.93 L 396.57 241.76 L 407.37 241.76 L 407.37 236.32 L 335.51 236.32 Z M 346.63 247.69 L 346.63 264.98 L 378.38 264.98 L 378.38 247.69 L 346.63 247.69 Z M 372.86 260.44 L 352.15 260.44 L 352.15 252.15 L 372.86 252.15 L 372.86 260.44 Z M 413.82 199.7 C 422.42 210.34 426.81 223 426.81 237.62 C 426.81 252.24 422.42 264.82 413.82 275.54 L 437.45 275.54 L 437.45 199.7 L 413.82 199.7 Z"></path>
        </svg>
    `;
    
    modal.innerHTML = `
        ${svgContent}
        <button onclick="this.parentElement.remove()" style="
            margin-top: 15px;
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        ">关闭</button>
    `;
    
    document.body.appendChild(modal);
    spawnPartices();

    // Animate the SVG path
    anime({
        targets: '#namePath',
        strokeDashoffset: [anime.setDashoffset, 0],
        fill: ['none','#000'],
        easing: 'easeInOutSine',
        duration: 2000,
        delay: 300,
        complete: function() {
            console.log('complete')
            document.getElementById('luckycat').remove()
        }
    });
}