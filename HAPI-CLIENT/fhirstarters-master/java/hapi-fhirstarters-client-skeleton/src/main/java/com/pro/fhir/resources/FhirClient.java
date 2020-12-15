package com.pro.fhir.resources;

import java.util.Date;

import org.hl7.fhir.instance.model.api.IIdType;
import org.hl7.fhir.r4.model.AdverseEvent;
import org.hl7.fhir.r4.model.AllergyIntolerance;
import org.hl7.fhir.r4.model.Bundle;
import org.hl7.fhir.r4.model.CarePlan;
import org.hl7.fhir.r4.model.CarePlan.CarePlanIntent;
import org.hl7.fhir.r4.model.CarePlan.CarePlanStatus;
import org.hl7.fhir.r4.model.CareTeam;
import org.hl7.fhir.r4.model.CareTeam.CareTeamStatus;
import org.hl7.fhir.r4.model.CodeableConcept;
import org.hl7.fhir.r4.model.Coding;
import org.hl7.fhir.r4.model.ContactPoint.ContactPointSystem;
import org.hl7.fhir.r4.model.ContactPoint.ContactPointUse;
import org.hl7.fhir.r4.model.DateType;
import org.hl7.fhir.r4.model.DecimalType;
import org.hl7.fhir.r4.model.DiagnosticReport;
import org.hl7.fhir.r4.model.DiagnosticReport.DiagnosticReportStatus;
import org.hl7.fhir.r4.model.Enumerations.AdministrativeGender;
import org.hl7.fhir.r4.model.IdType;
import org.hl7.fhir.r4.model.InstantType;
import org.hl7.fhir.r4.model.Narrative.NarrativeStatus;
import org.hl7.fhir.r4.model.Observation;
import org.hl7.fhir.r4.model.Observation.ObservationReferenceRangeComponent;
import org.hl7.fhir.r4.model.Observation.ObservationStatus;
import org.hl7.fhir.r4.model.Patient;
import org.hl7.fhir.r4.model.Period;
import org.hl7.fhir.r4.model.Practitioner;
import org.hl7.fhir.r4.model.Quantity;
import org.hl7.fhir.r4.model.Reference;

import ca.uhn.fhir.context.FhirContext;
import ca.uhn.fhir.rest.api.MethodOutcome;
import ca.uhn.fhir.rest.client.api.IGenericClient;

public class FhirClient {

	// The FHIR context is the central starting point for the use of the HAPI FHIR
	// API
	// It should be created once, and then used as a factory for various other types
	// of objects (parsers, clients, etc.)
	static FhirContext ctx = FhirContext.forR4();
	IGenericClient client = ctx.newRestfulGenericClient("http://localhost:8080/fhir");

	// Populate Practitioner Resource
	public static void populatePractitionerResourceAndCareTeam() {

		Practitioner practitioner = new Practitioner();
		practitioner.setId("Practitioner-01");
		practitioner.getMeta().setVersionId("1").setLastUpdatedElement(new InstantType("2019-05-29T14:58:58.181+05:30"))
				.addProfile("https://nrces.in/ndhm/fhir/r4/StructureDefinition/Practitioner");
		practitioner.getText().setStatus(NarrativeStatus.GENERATED)
				.setDivAsString("<div xmlns=\"http://www.w3.org/1999/xhtml\">Dr. DEF, MD (Medicine)</div>");
		practitioner.addIdentifier()
				.setType(new CodeableConcept(
						new Coding("http://terminology.hl7.org/CodeSystem/v2-0203", "MD", "Medical License number")))
				.setSystem("https://ndhm.in/DigiDoc").setValue("7601003178999");
		practitioner.addName().setText("Dr. DEF");

		// Give the Practitioner a temporary UUID so that other resources in the
		// transaction can refer to it
		practitioner.setId(IdType.newRandomUuid());
		// Create an CareTeam object
		CareTeam careteam = new CareTeam();
		careteam.setName("Ranjeet Kumar");
		careteam.addParticipant().addRole().setText("responsiblePerson");

		// The careteam refers to the practitioner using the ID, which is already
		// set to a temporary UUID
		careteam.setSubject(new Reference(practitioner.getIdElement().getValue()));

		// Create a bundle that will be used as a transaction
		Bundle bundle = new Bundle();
		bundle.setType(Bundle.BundleType.TRANSACTION);

		// Add the patient as an entry. This entry is a POST with an
		// If-None-Exist header (conditional create) meaning that it
		// will only be created if there isn't already a Patient with
		// the identifier 12345
		bundle.addEntry().setFullUrl(practitioner.getIdElement().getValue()).setResource(practitioner).getRequest()
				.setUrl("Practitioner").setIfNoneExist("identifier=http://acme.org/mrns|12345")
				.setMethod(Bundle.HTTPVerb.POST);

		// Add the careteam. This entry is a POST with no header
		// (normal create) meaning that it will be created even if
		// a similar resource already exists.
		bundle.addEntry().setResource(careteam).getRequest().setUrl("careteam").setMethod(Bundle.HTTPVerb.POST);

		// Log the request
		FhirContext ctx = FhirContext.forR4();
		System.out.println(ctx.newJsonParser().setPrettyPrint(true).encodeResourceToString(bundle));

		// Create a client and post the transaction to the server
		IGenericClient client = ctx.newRestfulGenericClient("http://localhost:8080/fhir");
		Bundle resp = client.transaction().withBundle(bundle).execute();

		// Log the response
		System.out.println(ctx.newJsonParser().setPrettyPrint(true).encodeResourceToString(resp));
	}

	public static void careTeamResource() {

		CareTeam ct = new CareTeam();

		ct.addIdentifier().setType(new CodeableConcept(
				new Coding("http://terminology.hl7.org/CodeSystem/v2-0203", "MR", "Medical record number")));
		ct.setStatus(CareTeamStatus.ACTIVE);
		ct.addCategory(new CodeableConcept().setText("test"));
		ct.setName("Ranjeet kumar");
		ct.setSubject(new Reference().setReference("CareTeam-01"));
		ct.setEncounter(new Reference().setReference("encounter-01"));
		ct.setPeriod(new Period().setStart(new Date()));
		ct.addParticipant().addRole().setText("Text");

		Practitioner practitioner = new Practitioner();
		practitioner.setId("Practitioner-01");
		practitioner.getMeta().setVersionId("1").setLastUpdatedElement(new InstantType("2019-05-29T14:58:58.181+05:30"))
				.addProfile("https://nrces.in/ndhm/fhir/r4/StructureDefinition/Practitioner");
		practitioner.getText().setStatus(NarrativeStatus.GENERATED)
				.setDivAsString("<div xmlns=\"http://www.w3.org/1999/xhtml\">Dr. Ranjeet Kumar, MD (Medicine)</div>");
		practitioner.addIdentifier()
				.setType(new CodeableConcept(
						new Coding("http://terminology.hl7.org/CodeSystem/v2-0203", "MD", "Medical License number")))
				.setSystem("https://ndhm.in/DigiDoc").setValue("7601003178999");
		practitioner.addName().setText("Dr.Ranjeet Kumar");

		// Give the CareTeam a temporary UUID so that other resources in the transaction
		// can refer to it
		ct.setId(IdType.newRandomUuid());
		// Create a bundle that will be used as a transaction
		Bundle bundle = new Bundle();
		bundle.setType(Bundle.BundleType.TRANSACTION);

		// Add the patient as an entry. This entry is a POST with an
		// If-None-Exist header (conditional create) meaning that it
		// will only be created if there isn't already a Patient with
		// the identifier 12345
		bundle.addEntry().setFullUrl(ct.getIdElement().getValue()).setResource(ct).getRequest().setUrl("Practitioner")
				.setIfNoneExist("identifier=http://acme.org/mrns|12345").setMethod(Bundle.HTTPVerb.POST);

		// Add the careteam. This entry is a POST with no header
		// (normal create) meaning that it will be created even if
		// a similar resource already exists.
		bundle.addEntry().setResource(practitioner).getRequest().setUrl("careteam").setMethod(Bundle.HTTPVerb.POST);

		// Log the request
		FhirContext ctx = FhirContext.forR4();
		System.out.println(ctx.newJsonParser().setPrettyPrint(true).encodeResourceToString(bundle));

		// Create a client and post the transaction to the server
		IGenericClient client = ctx.newRestfulGenericClient("http://localhost:8080/fhir");
		Bundle resp = client.transaction().withBundle(bundle).execute();

		// Log the response
		System.out.println(ctx.newJsonParser().setPrettyPrint(true).encodeResourceToString(resp));

	}

	public static void diagnosticReport() {

		Observation observation = new Observation();
		observation.setId("Observation-01");
		observation.getMeta().addProfile("https://nrces.in/ndhm/fhir/r4/StructureDefinition/Observation");
		observation.setStatus(ObservationStatus.FINAL);
		observation.setCode(new CodeableConcept(
				new Coding("http://loinc.org", "35200-5", "Cholesterol [Moles/​volume] in Serum or Plasma"))
						.setText("Cholesterol"));
		observation.setValue(new Quantity().setValueElement(new DecimalType("6.3")).setCode("258813002")
				.setUnit("mmol/L").setSystem("http://snomed.info/sct"));
		observation.getReferenceRange().add(
				new ObservationReferenceRangeComponent().setHigh(new Quantity().setValueElement(new DecimalType("6.3"))
						.setCode("258813002").setUnit("mmol/L").setSystem("http://snomed.info/sct")));
		// observation.setSubject(new
		// Reference().setReference("DiagnosticReport/DiagnosticReport-01"));
		DiagnosticReport diagnosticReportLab = new DiagnosticReport();
		// diagnosticReportLab.setId("DiagnosticReport-01");
		diagnosticReportLab.getMeta().setVersionId("1")
				.setLastUpdatedElement(new InstantType("2020-07-09T15:32:26.605+05:30"))
				.addProfile("https://nrces.in/ndhm/fhir/r4/StructureDefinition/DiagnosticReportLab");
		diagnosticReportLab.setStatus(DiagnosticReportStatus.FINAL);
		diagnosticReportLab.setCode(
				new CodeableConcept(new Coding("http://loinc.org", "24331-1", "Lipid 1996 panel - Serum or Plasma")));
		// diagnosticReportLab.getResultsInterpreter().add(new
		// Reference().setReference("Practitioner/Practitioner-01").setDisplay("Dr.
		// DEF"));
		diagnosticReportLab.setConclusion("Elevated cholesterol/high density lipoprotein ratio");
		diagnosticReportLab.addResult(new Reference().setReference("Observation/Observation-01"))
				.addResult(new Reference().setReference("Observation/Observation-triglyceride"));

		FhirContext ctx = FhirContext.forR4();
		IGenericClient client = ctx.newRestfulGenericClient("http://localhost:8080/fhir");

		// Create the resource on the server
		MethodOutcome outcome = client.create().resource(diagnosticReportLab).execute();

		// Log the ID that the server assigned
		IIdType id = outcome.getId();
		System.out.println("Created diagnosticReportLab, got ID: " + id);

	}

	static void m2() {

		AdverseEvent adverseEvent = new AdverseEvent();
		adverseEvent.setId("AdverseEvent-01");
		adverseEvent.getSubject();

		AllergyIntolerance allergyIntolerance = new AllergyIntolerance();
		allergyIntolerance.setId("AllergyIntolerance-01");
		allergyIntolerance.getMeta().addProfile("https://nrces.in/ndhm/fhir/r4/StructureDefinition/AllergyIntolerance");
		allergyIntolerance.getCode().addCoding(new Coding("http://snomed.info/sct", "227493005", "Cashew nuts"));
		// allergyIntolerance.setPatient(new
		// Reference().setReference("Patient/Patient-01"));
		allergyIntolerance.setClinicalStatus(new CodeableConcept(
				new Coding("http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical", "active", "Active")));
		
	   FhirContext ctx = FhirContext.forR4();
		IGenericClient client = ctx.newRestfulGenericClient("http://localhost:8080/fhir");

		// Create the resource on the server
		MethodOutcome outcome = client.create().resource(adverseEvent).execute();

		// Log the ID that the server assigned
		IIdType id = outcome.getId();
		System.out.println("Created diagnosticReportLab, got ID: " + id);

	}
	
	
	
	
	public static void care() {
		
		
			
		
			
			
			
			
      
			
			
			DiagnosticReport diagnosticReportLab = new DiagnosticReport();
			diagnosticReportLab.setId("DiagnosticReport-01");
			diagnosticReportLab.getMeta().setVersionId("1").setLastUpdatedElement(new InstantType("2020-07-09T15:32:26.605+05:30")).addProfile("https://nrces.in/ndhm/fhir/r4/StructureDefinition/DiagnosticReportLab");
			diagnosticReportLab.setStatus(DiagnosticReportStatus.FINAL);
			diagnosticReportLab.setCode(new CodeableConcept(new Coding("http://loinc.org","24331-1","Lipid 1996 panel - Serum or Plasma")));
			diagnosticReportLab.getResultsInterpreter().add(new Reference().setReference("Practitioner/Practitioner-01").setDisplay("Dr. DEF"));
			diagnosticReportLab.setConclusion("Elevated cholesterol/high density lipoprotein ratio");
			diagnosticReportLab.addResult(new Reference().setReference("Observation/Observation-cholesterol")).addResult(new Reference().setReference("Observation/Observation-triglyceride"));
			
			

			
			
			
			
			
			
			
			
			

		
	}
	
	
	public static void patientResource() {
		
			Patient patient = new Patient();
			patient.setId("Patient-01");
			patient.getMeta().setVersionId("1").setLastUpdatedElement(new InstantType("2020-07-09T14:58:58.181+05:30")).addProfile("https://nrces.in/ndhm/fhir/r4/StructureDefinition/Patient");
			patient.getText().setStatus(NarrativeStatus.GENERATED).setDivAsString("<div xmlns=\"http://www.w3.org/1999/xhtml\">ABC, 41 year, Male</div>");
			patient.addIdentifier().setType(new CodeableConcept(new Coding("http://terminology.hl7.org/CodeSystem/v2-0203", "MR", "Medical record number"))).setSystem("https://ndhm.in/SwasthID").setValue("1234");
			patient.addName().setText("ABC");
			patient.addTelecom().setSystem(ContactPointSystem.PHONE).setValue("+919818512600").setUse(ContactPointUse.HOME);
			patient.setGender(AdministrativeGender.MALE).setBirthDateElement(new DateType("1981-01-12"));
		
		    FhirContext ctx = FhirContext.forR4();
			IGenericClient client = ctx.newRestfulGenericClient("http://localhost:8080/fhir");
			// Create the resource on the server
			MethodOutcome outcome = client.create().resource(patient).execute();
			// Log the ID that the server assigned
			IIdType id = outcome.getId();
			System.out.println("Created resource, got ID: " + id);
		
	}
	
	
	public static void carePlanResource() {
		
		
		CarePlan carePlan = new CarePlan();
		carePlan.setId("CarePlan-01");
		carePlan.getMeta().addProfile("https://nrces.in/ndhm/fhir/r4/StructureDefinition/CarePlan");
		carePlan.setStatus(CarePlanStatus.ACTIVE);
		carePlan.setIntent(CarePlanIntent.PLAN);
		carePlan.setSubject(new Reference().setReference("Patient/Patient-0").setDisplay("ABC"));
		FhirContext ctx = FhirContext.forR4();
		IGenericClient client = ctx.newRestfulGenericClient("http://localhost:8080/fhir");
		// Create the resource on the server
		MethodOutcome outcome = client.create().resource(carePlan).execute();
        // Log the ID that the server assigned
		IIdType id = outcome.getId();
		System.out.println("Created resource, got ID: " + id);
	}
	
	
	
	
	
	public static void observationResource() {
		
		Observation observation = new Observation();
		observation.setId("Observation-01");
		observation.getMeta().addProfile("https://nrces.in/ndhm/fhir/r4/StructureDefinition/Observation");
		observation.setStatus(ObservationStatus.FINAL);
		observation.setCode(new CodeableConcept(new Coding("http://loinc.org", "35200-5", "Cholesterol [Moles/​volume] in Serum or Plasma")).setText("Cholesterol"));
		observation.setValue(new Quantity().setValueElement(new DecimalType("6.3")).setCode("258813002").setUnit("mmol/L").setSystem("http://snomed.info/sct"));
		observation.getReferenceRange().add(new ObservationReferenceRangeComponent().setHigh(new Quantity().setValueElement(new DecimalType("6.3")).setCode("258813002").setUnit("mmol/L").setSystem("http://snomed.info/sct")));
		observation.setSubject(new Reference().setReference("Patient/Patient-01"));
		
		FhirContext ctx = FhirContext.forR4();
		IGenericClient client = ctx.newRestfulGenericClient("http://localhost:8080/fhir");
		// Create the resource on the server
		MethodOutcome outcome = client.create().resource(observation).execute();
        // Log the ID that the server assigned
		IIdType id = outcome.getId();
		System.out.println("Created resource, got ID: " + id);
		
	}
	
	
	public static void diagnosticReportLabRrsource() {
		
		DiagnosticReport diagnosticReportLab = new DiagnosticReport();
		diagnosticReportLab.setId("DiagnosticReport-01");
		diagnosticReportLab.getMeta().setVersionId("1").setLastUpdatedElement(new InstantType("2020-07-09T15:32:26.605+05:30")).addProfile("https://nrces.in/ndhm/fhir/r4/StructureDefinition/DiagnosticReportLab");
		diagnosticReportLab.setStatus(DiagnosticReportStatus.FINAL);
		diagnosticReportLab.setCode(new CodeableConcept(new Coding("http://loinc.org","24331-1","Lipid 1996 panel - Serum or Plasma")));
		diagnosticReportLab.getResultsInterpreter().add(new Reference().setReference("Practitioner/Practitioner-01").setDisplay("Dr. DEF"));
		diagnosticReportLab.setConclusion("Elevated cholesterol/high density lipoprotein ratio");
		//diagnosticReportLab.addResult(new Reference().setReference("Observation/Observation-cholesterol")).addResult(new Reference().setReference("Observation/Observation-triglyceride"));
		
		diagnosticReportLab.addResult(new Reference().setReference("Observation/Observation-01")).addResult(new Reference().setReference("Observation/Observation-triglyceride"));
		
		
		FhirContext ctx = FhirContext.forR4();
		IGenericClient client = ctx.newRestfulGenericClient("http://localhost:8080/fhir");
		// Create the resource on the server
		MethodOutcome outcome = client.create().resource(diagnosticReportLab).execute();
        // Log the ID that the server assigned
		IIdType id = outcome.getId();
		System.out.println("Created resource, got ID: " + id);
	}
	
	
	
	public static void practitionerResource() {
		
		
		Practitioner practitioner = new Practitioner();
		practitioner.setId("Practitioner-01");
		practitioner.getMeta().setVersionId("1").setLastUpdatedElement(new InstantType("2019-05-29T14:58:58.181+05:30")).addProfile("https://nrces.in/ndhm/fhir/r4/StructureDefinition/Practitioner");
		practitioner.getText().setStatus(NarrativeStatus.GENERATED).setDivAsString("<div xmlns=\"http://www.w3.org/1999/xhtml\">Dr. DEF, MD (Medicine)</div>");
		practitioner.addIdentifier().setType(new CodeableConcept(new Coding("http://terminology.hl7.org/CodeSystem/v2-0203", "MD", "Medical License number"))).setSystem("https://ndhm.in/DigiDoc").setValue("7601003178999");
		practitioner.addName().setText("Dr. DEF");
		
		
		FhirContext ctx = FhirContext.forR4();
		IGenericClient client = ctx.newRestfulGenericClient("http://localhost:8080/fhir");
		// Create the resource on the server
		MethodOutcome outcome = client.create().resource(practitioner).execute();
        // Log the ID that the server assigned
		IIdType id = outcome.getId();
		System.out.println("Created resource, got ID: " + id);
	}
	
	
	
	

	public static void main(String[] args) {

		//patientResource();
		//carePlanResource();
		 //observationResource();
		//practitionerResource();
		
		diagnosticReportLabRrsource();

	}
}
