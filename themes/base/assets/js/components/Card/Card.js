'use strict';

import './card.less';

import React, { Component } from 'react';

class Card extends Component {
	static propTypes = {
		member: React.PropTypes.object
	};

	render() {
		return (
			<div className="card grid__lg--10 push__lg--1">
				<h2 className="card__title">Conhe&ccedil;a a equipe</h2>
				<figure className="grid--12 grid__md--4 grid--center member">
					<img src="http://fakeimg.pl/155x120?text=Kammiri&font=bebas" alt="Dummy" className="member__photo" />
					<figcaption className="member__caption">
						<h2 className="member__name">
							{this.props.member.name}
						</h2>
						<p className="member__title">{this.props.member.title}</p>

					</figcaption>
				</figure>
				<p className="member__short grid__lg--8 grid--center">
					{this.props.member.shortDesc}
				</p>
				<section className="card__content">
					<div className="card__column grid--12 grid__md--5 grid--nogutters">
						<hr />
						{this.renderFormation()}
					</div>

					<div className="card__column grid--12 grid__md--5 grid--nogutters">
						<hr />
						{this.renderMembership()}
					</div>
				</section>
				<section className="card__footer">
					<a className="card__link" href={'mailto:' + this.props.member.contact.mail}>{this.props.member.contact.mail}</a>
					<a className="card__link" href={'tel:' + this.props.member.contact.phone}>{this.props.member.contact.phone}</a>
					<a className="card__link" href={this.props.member.contact.linkedin}>
						<i className="icon icon--linkedin" />
					</a>
				</section>
			</div>
		);
	}

	renderFormation() {
		return this.props.member.resume.map((item, index) => {
			return (
				<p className="card__info" key={'item-' + index}>
					{item}
				</p>
			);
		});
	}

	renderMembership() {
		return this.props.member.membership.map((item, index) => {
			return (
				<p className="card__info" key={'membership-' + index}>
					{item}
				</p>
			);
		});
	}

	// renderContact() {
	// 	return this.props.member.contact.map((item, index) => {
	// 		switch (item.type) {
	// 			case 'mail':
	// 				return (
	// 					<a className="card__link" href={'mailto:' + item} key={'link' + index}>{item}</a>
	// 				);
	// 			case 'phone':
	// 				return (
	// 					<a className="card__link" href={'tel:' + item} key={'link' + index}>{item}</a>
	// 				);
	// 			default:
	// 				return (
	// 					<a className="card__link" href={item} key={'link' + index}>{item}</a>
	// 				);
	// 		}
	// 	});
	// }
}

export default Card;
