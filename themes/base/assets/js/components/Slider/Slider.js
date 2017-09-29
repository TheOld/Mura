import React, { Component } from 'react';

import Card from '../Card/Card.js';
import ReactSlider from 'react-slick';
import SliderNext from './SliderNext.js';
import SliderPrevious from './SliderPrevious.js';

class Slider extends Component {
	render() {
		const settings = {
			dots: false,
			infinite: true,
			arrows: true,
			speed: 280,
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: true,
			swipeToSlide: true,
			lazyLoad: false,
			initialSlide: 0,
			draggable: false,
			variableWidth: false,
			prevArrow: <SliderPrevious action={this.handlePrevious} />,
			nextArrow: <SliderNext action={this.handleNext} />,
			responsive: [
				{
					breakpoint: 962,
					settings: {
						centerMode: false
					}
				}
			]
		};
		return (
			<ReactSlider {...settings} ref="slider" >
				{this.renderCards()}
			</ReactSlider>
		);
	}
	renderCards() {
		const member = {
			name: 'Eduardo Jacob Murakami',
			title: 'ADVOGADO CONSULTOR',
			photo: 'themes/base/assets/img/foto_eduardo.png',
			shortDesc: 'Experiência internacional, sendo conselheiro e consultor jurídico de empresas sediadas no exterior.',
			resume: [
				'Mestre em Gestão Estratégica de Empresas Familiares pela Universidad Europea Miguel de Cervantes.',
				'Pós-graduando em Direito Imobiliário Aplicado pela EPD.',
				'Pós-graduado em Direito Empresarial e dos Negócios pela UNIVALI.',
				'Bacharel em Direito pelo CESUSC – FCSF.'
			],
			membership: [
				'Membro da Ordem dos Advogados do Brasil (OAB/SC 31.329).',
				'Membro Associado do Instituto Brasileiro de Governança Corporativa (IBGC).',
				'Membro Profissional do Family Firm Institute, Inc. (FFI).',
				'Premiado no II Prêmio Libertas, promovido pelo Ministério de Justiça e UNODC.'
			],
			contact: {
				mail: 'eduardo@muraempresarial.com.br',
				phone: '47.991796790',
				linkedin: 'https://www.linkedin.com/in/eduardojmurakami/'
			}
		};

		const member2 = {
			name: 'Rodrigo Cantú',
			title: 'ADVOGADO CONSULTOR',
			photo: 'themes/base/assets/img/foto_rodrigo.png',
			shortDesc: 'Mais de 18 anos de experiência como advogado, com alto reconhecimento público no Estado de Santa Catarina.',
			resume: [
				'Especialista latu sensu em Direito pela IELF – Instituto de Ensino Luiz Flávio Gomes.',
				'Pós-Graduado em Direito e Processo de Trabalho pela Escola do Ministério Público de Santa Catarina.',
				'Bacharel em Direito pela UNIVALI e em Administração pela UFSC.'
			],
			membership: [
				'Membro da Ordem dos Advogados do Brasil (OAB/SC 13.955).',
				'Diretor Administrativo da FESPORTE SC (2010-2013).',
				'Subcontrolador Jurídico da Prefeitura Municipal de Florianópolis SC (2013-2016).',
				'Membro Titular do Tribunal de Ética da OAB/SC (2010-2013).'
			],
			contact: {
				mail: 'rodrigo.cantu@muraempresarial.com',
				phone: '48. 330787530',
				linkedin: 'https://www.linkedin.com/in/rodrigocantu/'
			}
		};

		const members = [];
		members.push(member);
		members.push(member2);

		return members.map((member, index) => {
			return (
				<div key={'member-' + index}>
					<Card member={member} />
				</div>
			);
		});
	}
	handleNext = () => {
		this.refs.slider.slickNext();
	}

	handlePrevious = () => {
		this.refs.slider.slickPrev();
	}
}

export default Slider;
