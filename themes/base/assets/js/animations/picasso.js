import Parallax from 'scrollmonitor-parallax';
import eases from 'eases';

const aboutLogoProps = {
	selector: '#about-logo',
	start: {
		y: 340,
		opacity: 0
	},
	end: {
		opacity: 1,
		y: 0
	}
};

const sliderProps = {
	selector: '#slider',
	start: {
		y: 1260
	},
	end: {
		y: -40
	}
};
const methodSupProps = {
	selector: '.type--supalt',
	start: {
		opacity: 0,
		y: 320
	},
	end: {
		opacity: 1,
		y: 0
	}
};

const methodTitleProps = {
	selector: '#method-title',
	start: {
		opacity: 0,
		y: 280
	},
	end: {
		opacity: 1,
		y: 0
	}
};

const methodCopyProps = {
	selector: '#method-copy',
	start: {
		opacity: 0,
		y: 200
	},
	end: {
		opacity: 1,
		y: 0
	}
};

// js-boxes
const boxesProps = {
	selector: '.js-boxes',
	start: {
		opacity: 0,
		y: 520
	},
	end: {
		opacity: 1,
		y: 0
	}
};

// ====================== METHOD 01====================
// const number1Props = {
// 	selector: '#number1',
// 	start: {
// 		x: -100
// 	},
// 	end: {
// 		x: 0
// 	}
// };

const method1HeaderProps = {
	selector: '.js--header1',
	start: {
		y: 140
	},
	end: {
		y: 0
	}
};

const method1LeadProps = {
	selector: '.js--method1-lead',
	start: {
		y: -40
	},
	end: {
		y: 0
	}
};

const method1TitleProps = {
	selector: '.js--method1__title',
	start: {
		y: 180
	},
	end: {
		y: 0
	}
};

const method1CopyProps = {
	selector: '.method__copy--1',
	start: {
		y: 220
	},
	end: {
		y: 0
	}
};

// ====================== METHOD 02====================
// const number2Props = {
// 	selector: '#number2',
// 	start: {
// 		x: -100
// 	},
// 	end: {
// 		x: 0
// 	}
// };

const method2HeaderProps = {
	selector: '.js--header2',
	start: {
		y: 120
	},
	end: {
		y: 0
	}
};

const method2LeadProps = {
	selector: '.js--method2-lead',
	start: {
		y: -120
	},
	end: {
		y: 0
	}
};

const method2TitleProps = {
	selector: '.js--method2__title',
	start: {
		y: 140
	},
	end: {
		y: 0
	}
};

const method2CopyProps = {
	selector: '.method__copy--2',
	start: {
		y: 60
	},
	end: {
		y: 0
	}
};

// ====================== METHOD 03====================
// const number3Props = {
// 	selector: '#number3',
// 	start: {
// 		x: -100
// 	},
// 	end: {
// 		x: 0
// 	}
// };

const method3HeaderProps = {
	selector: '.js--header3',
	start: {
		y: 120
	},
	end: {
		y: 0
	}
};

const method3LeadProps = {
	selector: '.js--method3-lead',
	start: {
		y: -120
	},
	end: {
		y: 0
	}
};

const method3TitleProps = {
	selector: '.js--method3__title',
	start: {
		y: 140
	},
	end: {
		y: 0
	}
};

const method3CopyProps = {
	selector: '.method__copy--3',
	start: {
		y: 60
	},
	end: {
		y: 0
	}
};

// ====================== METHOD 04====================
// const number4Props = {
// 	selector: '#number4',
// 	start: {
// 		x: -100
// 	},
// 	end: {
// 		x: 0
// 	}
// };

const method4HeaderProps = {
	selector: '.js--header4',
	start: {
		y: 120
	},
	end: {
		y: 0
	}
};

const method4TitleProps = {
	selector: '.js--method4__title',
	start: {
		y: 80
	},
	end: {
		y: 0
	}
};

const method4CopyProps = {
	selector: '.method__copy--4',
	start: {
		y: 60
	},
	end: {
		y: 0
	}
};

class Picasso {
	constructor() {
		this.parallax = Parallax;
		this.sections = document.querySelectorAll('.section');
		this.containers = [];
		this.createContainers();
	}

	init() {

	}

	createContainers() {
		this.sections.forEach((section, index) => {
			this.containers.push(this.parallax.create(section));
		}, this);

		this.addParallaxToEl();
	}

	addParallaxToEl() {
		for (var index = 0; index < this.containers.length; index++) {
			var section = this.containers[index];
			let watchedSection = section.watcher.watchItem;
			console.log(eases.expoOut);
			switch (watchedSection.id) {
				case 'about':
					section.add(
						document.querySelector(aboutLogoProps.selector), {
							start: {
								y: aboutLogoProps.start.y,
								opacity: 0
							},
							end: {
								y: aboutLogoProps.end.y,
								opacity: 1
							},
							easing: {
								y: function(ratio) { return Math.sin(0.9 * ratio * Math.PI); },
								opacity: eases.linear
							}
						}
					);
					section.add(
						document.querySelector(sliderProps.selector), {
							start: {
								y: sliderProps.start.y
							},
							end: {
								y: sliderProps.end.y
							},
							easing: {
								y: eases.cubicOut,
								opacity: eases.linear
							}
						}
					);
					break;
				case 'method':
					section.add(
						document.querySelector(methodSupProps.selector), {
							start: {
								y: methodSupProps.start.y,
								opacity: 0.3
							},
							end: {
								y: methodSupProps.end.y,
								opacity: 1
							},
							easing: {
								y: eases.cubicOut,
								opacity: eases.cubicOut
							}
						},
						-1.5
					);
					section.add(
						document.querySelector(methodTitleProps.selector), {
							start: {
								y: methodTitleProps.start.y,
								opacity: 0.3
							},
							end: {
								y: methodTitleProps.end.y,
								opacity: 1
							},
							easing: {
								y: eases.cubicOut,
								opacity: eases.cubicOut
							}
						},
						-1.5
					);
					section.add(
						document.querySelector(boxesProps.selector), {
							start: {
								y: boxesProps.start.y,
								opacity: 0.3
							},
							end: {
								y: boxesProps.end.y,
								opacity: 1
							},
							easing: {
								y: eases.cubicOut,
								opacity: eases.cubicOut
							}
						}
					);
					section.add(
						document.querySelector(methodCopyProps.selector), {
							start: {
								y: methodCopyProps.start.y,
								opacity: 0.3
							},
							end: {
								y: methodCopyProps.end.y,
								opacity: 1
							},
							easing: {
								y: eases.cubicOut,
								opacity: eases.cubicOut
							}
						},
						-3
					);
					break;
				case 'method1':

					section.add(
						document.querySelector(method1HeaderProps.selector), {
							start: {
								y: method1HeaderProps.start.y,
								opacity: 0.2
							},
							end: {
								y: method1HeaderProps.end.y,
								opacity: 1
							},
							easing: {
								y: eases.cubicOut,
								opacity: eases.cubicOut
							}
						}
					);
					// section.add(
					// 	document.querySelector(number1Props.selector), {
					// 		start: {
					// 			x: number1Props.start.x,
					// 			opacity: 0.2
					// 		},
					// 		end: {
					// 			x: number1Props.end.x,
					// 			opacity: 1
					// 		},
					// 		easing: {
					// 			x: eases.cubicOut,
					// 			opacity: eases.linear
					// 		}
					// 	}
					// );
					section.add(
						document.querySelector(method1TitleProps.selector), {
							start: {
								y: method1TitleProps.start.y,
								opacity: 0.2
							},
							end: {
								y: method1TitleProps.end.y,
								opacity: 1
							},
							easing: {
								y: eases.quintOut,
								opacity: eases.quintOut
							}
						}
					);
					section.add(
						document.querySelector(method1CopyProps.selector), {
							start: {
								y: method1CopyProps.start.y,
								opacity: 0.2
							},
							end: {
								y: method1CopyProps.end.y,
								opacity: 1
							},
							easing: {
								y: eases.quintOut,
								opacity: eases.quintOut
							}
						}
					);
					section.add(
						document.querySelector(method1LeadProps.selector), {
							start: {
								y: method1LeadProps.start.y,
								opacity: 0
							},
							end: {
								y: method1LeadProps.end.y,
								opacity: 1
							},
							easing: {
								y: eases.easeOutElastic,
								opacity: eases.linear
							}
						}
					);

					break;
				case 'method2':
					section.add(
						document.querySelector(method2LeadProps.selector), {
							start: {
								y: method2LeadProps.start.y,
								opacity: 0
							},
							end: {
								y: method2LeadProps.end.y,
								opacity: 1.25
							},
							easing: {
								y: eases.cubicOut,
								opacity: eases.cubicOut
							}
						}
					);
					section.add(
						document.querySelector(method2HeaderProps.selector), {
							start: {
								y: method2HeaderProps.start.y,
								opacity: 0.2
							},
							end: {
								y: method2HeaderProps.end.y,
								opacity: 1
							},
							easing: {
								y: eases.cubicOut,
								opacity: eases.cubicOut
							}
						}
					);
					// section.add(
					// 	document.querySelector(number2Props.selector), {
					// 		start: {
					// 			x: number2Props.start.x,
					// 			opacity: 0.2
					// 		},
					// 		end: {
					// 			x: number2Props.end.x,
					// 			opacity: 1
					// 		},
					// 		easing: {
					// 			x: eases.cubicOut,
					// 			opacity: eases.linear
					// 		}
					// 	}
					// );
					section.add(
						document.querySelector(method2TitleProps.selector), {
							start: {
								y: method2TitleProps.start.y,
								opacity: 0.2
							},
							end: {
								y: method2TitleProps.end.y,
								opacity: 1
							},
							easing: {
								y: eases.quintOut,
								opacity: eases.quintOut
							}
						}
					);
					section.add(
						document.querySelector(method2CopyProps.selector), {
							start: {
								y: method2CopyProps.start.y,
								opacity: 0.2
							},
							end: {
								y: method2CopyProps.end.y,
								opacity: 1
							},
							easing: {
								y: eases.quintOut,
								opacity: eases.quintOut
							}
						}
					);
					break;

				case 'method3':
					section.add(
						document.querySelector(method3LeadProps.selector), {
							start: {
								y: method3LeadProps.start.y,
								opacity: 0
							},
							end: {
								y: method3LeadProps.end.y,
								opacity: 1.25
							},
							easing: {
								y: eases.cubicOut,
								opacity: eases.cubicOut
							}
						}
					);
					section.add(
						document.querySelector(method3HeaderProps.selector), {
							start: {
								y: method3HeaderProps.start.y,
								opacity: 0.2
							},
							end: {
								y: method3HeaderProps.end.y,
								opacity: 1
							},
							easing: {
								y: eases.cubicOut,
								opacity: eases.cubicOut
							}
						}
					);
					// section.add(
					// 	document.querySelector(number3Props.selector), {
					// 		start: {
					// 			x: number3Props.start.x,
					// 			opacity: 0.2
					// 		},
					// 		end: {
					// 			x: number3Props.end.x,
					// 			opacity: 1
					// 		},
					// 		easing: {
					// 			x: eases.cubicOut,
					// 			opacity: eases.linear
					// 		}
					// 	}
					// );
					section.add(
						document.querySelector(method3TitleProps.selector), {
							start: {
								y: method3TitleProps.start.y,
								opacity: 0.2
							},
							end: {
								y: method3TitleProps.end.y,
								opacity: 1
							},
							easing: {
								y: eases.quintOut,
								opacity: eases.quintOut
							}
						}
					);
					section.add(
						document.querySelector(method3CopyProps.selector), {
							start: {
								y: method3CopyProps.start.y,
								opacity: 0.2
							},
							end: {
								y: method3CopyProps.end.y,
								opacity: 1
							},
							easing: {
								y: eases.quintOut,
								opacity: eases.quintOut
							}
						}
					);
					break;
				case 'method4':
					section.add(
						document.querySelector(method4HeaderProps.selector), {
							start: {
								y: method4HeaderProps.start.y,
								opacity: 0.2
							},
							end: {
								y: method4HeaderProps.end.y,
								opacity: 1
							},
							easing: {
								y: eases.cubicOut,
								opacity: eases.cubicOut
							}
						}
					);
					// section.add(
					// 	document.querySelector(number4Props.selector), {
					// 		start: {
					// 			x: number4Props.start.x,
					// 			opacity: 0.2
					// 		},
					// 		end: {
					// 			x: number4Props.end.x,
					// 			opacity: 1
					// 		},
					// 		easing: {
					// 			x: eases.cubicOut,
					// 			opacity: eases.linear
					// 		}
					// 	}
					// );
					section.add(
						document.querySelector(method4TitleProps.selector), {
							start: {
								y: method4TitleProps.start.y,
								opacity: 0.2
							},
							end: {
								y: method4TitleProps.end.y,
								opacity: 1
							},
							easing: {
								y: eases.quintOut,
								opacity: eases.quintOut
							}
						}
					);
					section.add(
						document.querySelector(method4CopyProps.selector), {
							start: {
								y: method4CopyProps.start.y,
								opacity: 0.2
							},
							end: {
								y: method4CopyProps.end.y,
								opacity: 1
							},
							easing: {
								y: eases.quintOut,
								opacity: eases.quintOut
							}
						}
					);
					break;
				case 'occupation':

					section.add(
						document.querySelector('.occ__bg'),
						{
							start: {
								y: 100
							},
							end: {
								y: 0
							},
							easing: {
								y: eases.quintOut
							}
						}
					);
					section.add(
						document.querySelector('.occ__title'),
						{
							start: {
								y: 420
							},
							end: {
								y: 0
							},
							easing: {
								y: eases.expoOut
							}
						}
					);
					section.add(
						document.querySelector('.occ__subtitle'),
						{
							start: {
								y: 660,
								opacity: 0
							},
							end: {
								y: 0,
								opacity: 1
							},
							easing: {
								y: eases.quintOut,
								opacity: eases.quintOut
							}
						}
					);
					break;
				default:
					break;
			}
		}
	}
};

export default Picasso;
