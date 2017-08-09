import React, { Component } from 'react';

import Card from '../Card/Card.js';
import ReactSlider from 'react-slick';
import SliderNext from './SliderNext.js';
import SliderPrevious from './SliderPrevious.js';

class Slider extends Component {
	render() {
		const settings = {
			dots: false,
			infinite: false,
			arrows: true,
			speed: 280,
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: true,
			swipeToSlide: true,
			lazyLoad: false,
			initialSlide: 0,
			variableWidth: false,
			prevArrow: <SliderPrevious action={this.handlePrevious} />,
			nextArrow: <SliderNext action={this.handleNext} />
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
				mail: 'eduardo@muraempresiarial.com.br',
				phone: '47.991796790',
				linkedin: 'http:www.linkedin.com.br'
			}
		};

		const member2 = {
			name: 'Rodrigo Cantú',
			resume: [],
			membership: [],
			contact: []
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
