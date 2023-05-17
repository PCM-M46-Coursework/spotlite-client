import { useRef } from "react";
import "../privacyCentre.css";

export default function ContactDataProtection() {
	const contactForm = useRef();

	function mockSubmit() {
		alert("Thank you for your message. We will get back to you as soon as possible with a reply.");
		contactForm.current.reset();
	}

	return (
		<>
			<h2 className="pc-page-title">Contact Data Protection Officer</h2>
			<p className="pc-detail-text">
				This form only functions as a pathway for data subjects to contact us about all issues related to the
				processing of their personal data and to the exercise of those certain rights.
			</p>

			<p className="pc-detail-text">
				Questions that are not related to this will not receive a response to a submission of this form.
			</p>
			<form className="gdpr-form" ref={contactForm}>
				<div class="form-group">
					<label htmlFor="gdpr_firstname">Your First Name (*)</label>
					<input class="form-control" type="text" name="gdpr_firstname" value="" required="" />
				</div>
				<div class="form-group">
					<label htmlFor="gdpr_lastname">Your Last Name (*)</label>
					<input class="form-control" type="text" name="gdpr_lastname" value="" required="" />
				</div>
				<div class="form-group">
					<label htmlFor="gdpr_email">Your Email (*)</label>
					<input class="form-control" type="email" name="gdpr_email" value="" required="" />
				</div>
				<div class="form-group">
					<label htmlFor="gdpr_message">Your message (*)</label>
					<textarea class="form-control" name="gdpr_message" required=""></textarea>
				</div>
				<div class="form-group">
					<label htmlFor="gdpr_terms">
						<input
							id="gdpr_terms"
							class="form-control"
							type="checkbox"
							name="gdpr_terms"
							value="1"
							required=""
						/>
						<span class="gdpr-accept-conditions-text">
							I agree to the privacy policy and that my data will be stored for this GDPR request .
						</span>
					</label>
				</div>
				<button onClick={mockSubmit} type="submit">
					Submit
				</button>
			</form>
		</>
	);
}
