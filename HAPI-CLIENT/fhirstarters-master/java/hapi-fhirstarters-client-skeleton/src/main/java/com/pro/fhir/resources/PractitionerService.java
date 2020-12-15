package com.pro.fhir.resources;

import org.hl7.fhir.instance.model.api.IIdType;
import org.hl7.fhir.r4.model.CodeableConcept;
import org.hl7.fhir.r4.model.Coding;
import org.hl7.fhir.r4.model.InstantType;
import org.hl7.fhir.r4.model.Practitioner;
import org.hl7.fhir.r4.model.Bundle.BundleEntryComponent;
import org.hl7.fhir.r4.model.Narrative.NarrativeStatus;

import ca.uhn.fhir.context.FhirContext;
import ca.uhn.fhir.rest.api.MethodOutcome;
import ca.uhn.fhir.rest.client.api.IGenericClient;
import test.ResourcePopulator;

public class PractitionerService {

	public static IIdType addPractitioner() {
		FhirContext ctx = FhirContext.forR4();
		IGenericClient client = ctx.newRestfulGenericClient("http://localhost:8080/fhir");
		Practitioner practitioner = new Practitioner();
		practitioner.addAddress().setCity("Jehanabad");
		practitioner.addAddress().setCountry("India");
		practitioner.addAddress().setId("1234567890");
		practitioner.addName().setFamily("Ranjeet kumar").addPrefix("Mr.").addSuffix("Singh");
		MethodOutcome outcome = client.create().resource(practitioner).execute();

		// Log the ID that the server assigned
		IIdType id = outcome.getId();
		return id;

	}
	
	
	
	
	
	// Populate Practitioner Resource
		public static Practitioner populatePractitionerResource()
		{
			Practitioner practitioner = new Practitioner();
			practitioner.setId("Practitioner-01");
			practitioner.getMeta().setVersionId("1").setLastUpdatedElement(new InstantType("2019-05-29T14:58:58.181+05:30")).addProfile("https://nrces.in/ndhm/fhir/r4/StructureDefinition/Practitioner");
			practitioner.getText().setStatus(NarrativeStatus.GENERATED).setDivAsString("<div xmlns=\"http://www.w3.org/1999/xhtml\">Dr. DEF, MD (Medicine)</div>");
			practitioner.addIdentifier().setType(new CodeableConcept(new Coding("http://terminology.hl7.org/CodeSystem/v2-0203", "MD", "Medical License number"))).setSystem("https://ndhm.in/DigiDoc").setValue("7601003178999");
			practitioner.addName().setText("Dr. DEF");
			return practitioner;
		}

	public static void main(String[] args) {
		System.out.println(addPractitioner());
		
		
		
		BundleEntryComponent bundleEntry2 = new BundleEntryComponent();
		bundleEntry2.setFullUrl("Patient/Patient-01");
		bundleEntry2.setResource(ResourcePopulator.populatePatientResource());
	}

}
