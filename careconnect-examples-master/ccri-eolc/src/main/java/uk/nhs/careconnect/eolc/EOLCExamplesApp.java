package uk.nhs.careconnect.eolc;

import ca.uhn.fhir.context.FhirContext;
import ca.uhn.fhir.rest.api.EncodingEnum;
import ca.uhn.fhir.rest.api.MethodOutcome;
import ca.uhn.fhir.rest.client.api.IGenericClient;

import ca.uhn.fhir.rest.server.exceptions.UnprocessableEntityException;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.io.IOUtils;
import org.hl7.fhir.dstu3.model.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.client.RestTemplate;

import java.io.*;
import java.math.BigDecimal;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

@SpringBootApplication
public class EOLCExamplesApp implements CommandLineRunner {

    private static final Logger log = LoggerFactory.getLogger(EOLCExamplesApp.class);

    private static String yasEncounterIdentifier = "https://fhir.yas.nhs.uk/Encounter/Identifier";

    private static String interOpenEncounterIdentifier = "https://fhir.interopen.org/Encounter/Identifier";
    private static String interOpenLocationIdentifier = "https://fhir.interopen.org/Location/Identifier";
    private static String interOpenEpisodeOfCareIdentifier = "https://fhir.interopen.org/EpisodeOfCare/Identifier";

    private static String interOpenProcedureIdentifier = "https://fhir.interopen.org/Procedure/Identifier";
    private static String interOpenPractitionerIdentifier = "https://fhir.interopen.org/Practitioner/Identifier";
    private static String interOpenMedicationRequestIdentifier = "https://fhir.interopen.org/MedicationRequest/Identifier";
    private static String interOpenMedicationDispenseIdentifier = "https://fhir.interopen.org/MedicationDispense/Identifier";
    private static String interOpenMedicationAdministrationIdentifier = "https://fhir.interopen.org/MedicationAdministration/Identifier";
    private static String interOpenDosageUnitsNOS = "https://fhir.interopen.org/Medication/DosageUnitsNOS";

    private static String yasEpisodeIdentifier = "https://fhir.yas.nhs.uk/EpisodeOfCare/Identifier";

    private static String yasLocationIdentifier = "https://fhir.yas.nhs.uk/Location/Identifier";

    private static String yasConditionIdentifier = "https://fhir.yas.nhs.uk/Condition/Identifier";

    private static String tppListIdentifier = "https://fhir.tpp.co.uk/List/Identifier";
    private static String tppConsentIdentifier = "https://fhir.tpp.co.uk/Consent/Identifier";
    private static String tppNOKIdentifier = "https://fhir.tpp.co.uk/NOK/Identifier";

    private static String yasObservationIdentifier = "https://fhir.yas.nhs.uk/Observation/Identifier";

    private static String midYorksFlagIdentifier = "https://fhir.midyorks.nhs.uk/Flag/Identifier";

    private static String midYorksCarePlanIdentifier = "https://fhir.midyorks.nhs.uk/CarePlan/Identifier";

    private static String midYorksQuestionnaireResponseIdentifier = "https://fhir.midyorks.nhs.uk/QuestionnaireResponse/Identifier";

    private static String midYorksQuestionnaireIdentifier = "https://fhir.midyorks.nhs.uk/Questionnaire/Identifier";

    private static String midYorksConditionIdentifier = "https://fhir.midyorks.nhs.uk/Condition/Identifier";
    private static String midYorksProcedureIdentifier = "https://fhir.midyorks.nhs.uk/Procedure/Identifier";

    private static String yasDocumentIdentifier = "https://fhir.yas.nhs.uk/DocumentReference/Identifier";

    private static String westRidingCareTeamIdentifier = "https://fhir.westriding.nhs.uk/CareTeam/Identifier";
    private static String westRidingClinicalImpressionIdentifier = "https://fhir.westriding.nhs.uk/ClinicalImpressionf/Identifier";


    final String uuidtag = "urn:uuid:";

    Organization yas;

    Organization lth;
    Organization midyorks;
    Organization rkh;
    Organization hdft;

    Location jimmy;
    Location pinderfields;

    FhirContext ctxFHIR = FhirContext.forDstu3();

    Integer idno = 650;
    Integer locno = 730;
    Integer conno = 12730;
    Integer obsNo = 500;


    public static void main(String[] args) {
        SpringApplication.run(EOLCExamplesApp.class, args);
    }

    IGenericClient client = null;
    IGenericClient clientGPC = null;
    IGenericClient clientODS = null;
    IGenericClient clientNRLS = null;

    FhirBundleUtil fhirBundle;

    public static final String SNOMEDCT = "http://snomed.info/sct";


    DateFormat df = new SimpleDateFormat("HHmm_dd_MM_yyyy");

    @Override
    public void run(String... args) throws Exception {
        if (args.length > 0 && args[0].equals("exitcode")) {
            throw new Exception();
        }

        client = ctxFHIR.newRestfulGenericClient("https://data.developer.nhs.uk/ccri/camel/ccri-messaging/STU3/");
        //client = ctxFHIR.newRestfulGenericClient("http://127.0.0.1:8182/ccri-messaging/STU3/");
        //client = ctxFHIR.newRestfulGenericClient("https://data.developer-test.nhs.uk/ccri/camel/ccri-messaging/STU3/");
        client.setEncoding(EncodingEnum.XML);

        // clientGPC = ctxFHIR.newRestfulGenericClient("https://data.developer-test.nhs.uk/ccri/camel/fhir/gpc/");
        clientGPC = ctxFHIR.newRestfulGenericClient("https://data.developer-test.nhs.uk/ccri-fhir/STU3/");
        // clientGPC = ctxFHIR.newRestfulGenericClient("http://127.0.0.1:8187/ccri/camel/fhir/gpc/");
        // clientGPC.setEncoding(EncodingEnum.XML);


        clientODS = ctxFHIR.newRestfulGenericClient("https://directory.spineservices.nhs.uk/STU3/");
        clientODS.setEncoding(EncodingEnum.XML);

        Boolean loadDocuments = false;

       // KGM This is now fairly static. Use careconnect-cli to load the resource
       postQuestionnaire();


        // Kewn example patient
        loadEOLC();

        // Example Patient 1
        //  ONE JOHN EDITESTPATIENT  999 999 9468
      //  postOneEDITESTPATIENT();


        // Example Patient 2
        // TWO EDITESTPATIENT 999 999 9476

        // RAD contains base Resources referenced in the main getMicheal load.

    }

    public void postQuestionnaire() {


        SimpleDateFormat sd = new SimpleDateFormat("yyyy-MM-dd");

        Calendar cal = Calendar.getInstance();

        Date oneHourBack = cal.getTime();
        fhirBundle = new FhirBundleUtil(Bundle.BundleType.COLLECTION);

        Bundle bundle = new Bundle();

        Questionnaire questionnaire = getEOLCQuestionnaire();
        bundle.addEntry().setResource(questionnaire);
        fhirBundle.processBundleResources(bundle);

        questionnaire = getNEWS2Questionnaire();
        bundle.addEntry().setResource(questionnaire);
        fhirBundle.processBundleResources(bundle);

        System.out.println(ctxFHIR.newXmlParser().setPrettyPrint(true).encodeResourceToString(fhirBundle.getFhirDocument()));

        MethodOutcome outcome = client.create().resource(fhirBundle.getFhirDocument()).execute();

    }

    public Questionnaire getNEWS2Questionnaire() {
        Questionnaire questionnaire = new Questionnaire();
        questionnaire.setId(fhirBundle.getNewId(questionnaire));
        questionnaire.addIdentifier().setSystem("https://fhir.airelogic.com/STU3/Questionnaire").setValue("NEWS2");
        questionnaire.setUrl("https://fhir.airelogic.com/STU3/Questionnaire/NEWS2");
        questionnaire.setName("NEWS2");
        questionnaire.setTitle("NEWS2");
        questionnaire.setDescription("National Early Warning Score (NEWS)2");
        questionnaire.setStatus(Enumerations.PublicationStatus.DRAFT);
        questionnaire.addSubjectType("Patient");
        questionnaire.setPurpose("https://developer.nhs.uk/apis/news2-1.0.0-alpha.1/");

        Questionnaire.QuestionnaireItemComponent obs = questionnaire.addItem();
        obs.setText("BloodPressure")
                .setLinkId("NEWS2-1")
                .setType(Questionnaire.QuestionnaireItemType.REFERENCE)
                .addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("A Vital Signs profile to carry blood pressure information that contains at least one component for systolic and/or diastolic pressure."));

               
        addObsExtension(obs, "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-BloodPressure-Observation-1");


        obs = questionnaire.addItem();
        obs.setText("Body Temperature")
                .setLinkId("NEWS2-2")
                .setType(Questionnaire.QuestionnaireItemType.REFERENCE)
                .addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("The body temperature reading used to generate the NEWS2 score. "))
             ;
        addObsExtension(obs, "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-BodyTemperature-Observation-1");

        obs = questionnaire.addItem();
        obs.setText("ACVPU")
                .setLinkId("NEWS2-3")
                .setType(Questionnaire.QuestionnaireItemType.REFERENCE)
                .addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("This profile is used to carry alert, new-onset or worsening confusion, voice, pain, and unresponsiveness observations for a patient."))
               ;
        addObsExtension(obs, "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-ACVPU-Observation-1");

        obs = questionnaire.addItem();
        obs.setText("Hear Rate")
                .setLinkId("NEWS2-4")
                .setType(Questionnaire.QuestionnaireItemType.REFERENCE)
                .addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("The pulse rate reading used to generate the NEWS2 score."))
               ;
        addObsExtension(obs, "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-HeartRate-Observation-1");

        obs = questionnaire.addItem();
        obs.setText("Inspired Oxygen")
                .setLinkId("NEWS2-5")
                .setType(Questionnaire.QuestionnaireItemType.REFERENCE)
                .addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("The inspired oxygen observation used to generate the NEWS2 score."))
               ;
        addObsExtension(obs, "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-InspiredOxygen-Observation-1");

        obs = questionnaire.addItem();
        obs.setText("Saturated Oxygen")
                .setLinkId("NEWS2-6")
                .setType(Questionnaire.QuestionnaireItemType.REFERENCE)
                .addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("The oxygen saturation reading used to generate the NEWS2 score. "))
                ;
        addObsExtension(obs, "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-OxygenSaturation-Observation-1");

        obs = questionnaire.addItem();
        obs.setText("Respiratory Rate")
                .setLinkId("NEWS2-7")
               
                .setType(Questionnaire.QuestionnaireItemType.REFERENCE)
                .addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("The respiratory rate reading used to generate the NEWS2 score. "));
        addObsExtension(obs, "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-RespiratoryRate-Observation-1");

               obs = questionnaire.addItem();
        obs.setText("Sub Score")
                .setLinkId("NEWS2-SCORE")
                .setType(Questionnaire.QuestionnaireItemType.REFERENCE)
                .addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("Used to hold the sub-scores of the observations that go to make up the overall NEWS2 score. "))
               ;
        addObsExtension(obs, "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Subscore-Observation-1");

        obs = questionnaire.addItem();
        obs.setText("Encounter Information")
                .setLinkId("ENCOUNTER (PV1)")
                .setType(Questionnaire.QuestionnaireItemType.REFERENCE)
                .addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("Encounter information for the measurements"))
           ;
        obs.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedProfile")
                .setValue(new Reference("https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Encounter-1"));
        obs.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedResource")
                .setValue(new CodeType().setValue("Encounter"));

        return questionnaire;
    }



    public Questionnaire getEOLCQuestionnaire() {
        Questionnaire questionnaire = new Questionnaire();
        questionnaire.setId(fhirBundle.getNewId(questionnaire));
        questionnaire.addIdentifier().setSystem("https://fhir.nhs.uk/STU3/Questionnaire").setValue("CareConnect-EOLC-1");
        questionnaire.setUrl("https://fhir.nhs.uk/STU3/Questionnaire/CareConnect-EOLC-1");
        questionnaire.setName("End of Life Care");
        questionnaire.setTitle("End of Life Care");
        questionnaire.setVersion("0.1");
        questionnaire.setStatus(Enumerations.PublicationStatus.DRAFT);
        questionnaire.setPublisher("NHS Digital").setDate(new Date());
        questionnaire.addSubjectType("Patient");
        questionnaire
                .setDescription("EoL National Minimum Dataset")
                .setCopyright("Copyright © 2019 NHS Digital");
        questionnaire.setPurpose("EoL National Minimum Dataset (v2.3) WIP.xlsx");


        // Advanced Treatment Preferences



        Questionnaire.QuestionnaireItemComponent advpref = questionnaire.addItem();
        advpref.setLinkId("ATP")
                .setText("Advanced Treatment Preferences");
        advpref.setType(Questionnaire.QuestionnaireItemType.GROUP);

        Questionnaire.QuestionnaireItemComponent subgroup = advpref.addItem()
                .setLinkId("ATP001.1")

                .setText("Clinical Problems and Advised Interventions")
                .setRepeats(true)
                .setType(Questionnaire.QuestionnaireItemType.GROUP);
         subgroup.addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("This is effectively making up a Treatment Escalation Plan or and Emergency Treatment Plan."))
                ;


        Questionnaire.QuestionnaireItemComponent item = subgroup.addItem()
                .setLinkId("ATP001.1.1")
                .setText("ATP Problems")
                .setType(Questionnaire.QuestionnaireItemType.REFERENCE)
                .setRequired(true);
        item.addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("Description of the problem or the condition.  Either a diagnosis or description of an event that could actually happen  eg. breathlessness, fits, delerium, worsening oral intake of foods and fluids"));
        item.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedProfile")
                .setValue(new Reference("https://fhir.hl7.org.uk/StructureDefinition/CareConnect-Condition-1"));
        item.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedResource")
                .setValue(new CodeType().setValue("Condition"));

        item = subgroup.addItem()
                .setLinkId("ATP001.1.2")
                .setText("Treatment Level")
                .setType(Questionnaire.QuestionnaireItemType.REFERENCE);
        
                item.addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("Different systems use different word collections.  However, respondents agreed that implementation guidance will request that only these four values can be used: \\n" +
                        "* Comfort, symptomatic treatment only\\n" +
                        "* Home/Hospice, treatment of reversible conditions as appropriate \\n" +
                        "* Hospital, treatment of reversible conditions as appropriate\\n" +
                        "* Intensive, full active treatment\\n\\n" +
                        "Some systems may include the treatment level as part of the intervention text, hence it cannot be mandatory."));
               
        item.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedProfile")
                .setValue(new Reference("https://fhir.nhs.uk/STU3/StructureDefinition/EOL-ATP-CarePlan-1"));
        item.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedResource")
                .setValue(new CodeType().setValue("CarePlan"));


        subgroup = advpref.addItem()
                .setLinkId("ATP001.2")
                .setRequired(true)
                .setText("Anticipatory medicines/just in case box issued")
                .setType(Questionnaire.QuestionnaireItemType.REFERENCE);
        subgroup.addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("To inform those providing care that anticipatory medicines or a just in case box have been issued. These medicines could be administered promptly by appropriate staff if indicated."));

        subgroup.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedProfile")
                .setValue(new Reference("https://fhir.nhs.uk/STU3/StructureDefinition/CareConnect-EOL-Procedure-1"));
        subgroup.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedResource")
                .setValue(new CodeType().setValue("Procedure"));

        subgroup = advpref.addItem()
                .setLinkId("ATP001.3")
                .setRequired(true)
                .setText("Advance Decision to Refuse Treatment")
                .setType(Questionnaire.QuestionnaireItemType.REFERENCE);
        subgroup.addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("If ADRT is transmitted, then a status code should be transmitted.  It is acknowledged that some systems do not code this data, hence it cannot be mandatory."));
                ;
        subgroup.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedProfile")
                .setValue(new Reference("https://fhir.nhs.uk/STU3/StructureDefinition/EOL-ADRT-Flag-1"));
        subgroup.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedResource")
                .setValue(new CodeType().setValue("Flag"));


        subgroup = advpref.addItem()
                .setLinkId("ATP001.4")
                .setText("ReSPECT Care")
                .setType(Questionnaire.QuestionnaireItemType.GROUP);
        subgroup.addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("This is special case to include the ReSPECT Priority Scale value.  Many systems have/will implement eReSPECT and therefore the value can be preserved when being transmitted between systems."));


        item = subgroup.addItem()
                .setLinkId("ATP001.4.1")
                .setText("ReSPECT Patient Care Priority - Scale")
                .setRequired(true)
                .setType(Questionnaire.QuestionnaireItemType.INTEGER);
        item.addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("1-100 Where 1= absolute priority on sustaining life and 100= absolute priority in comfort."));

        item = subgroup.addItem()
                .setLinkId("ATP001.4.2")
                .setText("ReSPECT Patient Care Priority - Textual")
                .setType(Questionnaire.QuestionnaireItemType.STRING);
        item.addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("Where the ReSPECT priority is being transmitted, this value can include the ReSPECT Patient Care Priority statement - \"Considering the above priority, what is most important to you?\""));
              ;


        subgroup = advpref.addItem()
                .setLinkId("ATP001.5")
                .setRequired(true)
                .setText("Date of change in list of advance treatment preferences")
                .setType(Questionnaire.QuestionnaireItemType.DATE);

        subgroup = advpref.addItem()
                .setLinkId("ATP001.6")
                .setRequired(true)
                .setText("Professional recording these changes to this list of Problems and Interventions")
                .setType(Questionnaire.QuestionnaireItemType.REFERENCE);
        subgroup.addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("The professional recording the changes is mandatory as someone must have entered this data into the system.  This data may have been asked for overtly in the data entry form or may be taken from the user details of person logged in creating the record."));

       
        subgroup.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedProfile")
                .setValue(new Reference("https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Practitioner-1"));
        subgroup.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedResource")
                .setValue(new CodeType().setValue("Practitioner"));




        // consent


        Questionnaire.QuestionnaireItemComponent consent = questionnaire.addItem();
        consent.setLinkId("CON");
        consent.setText("Consent");
        consent
                .setRepeats(false)
                .setRequired(true)
                .setType(Questionnaire.QuestionnaireItemType.REFERENCE)
                .addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("This is not a mandatory group to allow for the concept where the provider has not recorded consent."));
       
        consent.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedProfile")
                .setValue(new Reference("https://fhir.nhs.uk/STU3/StructureDefinition/EOL-Consent-1"));
        consent.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedResource")
                .setValue(new CodeType().setValue("Consent"));

        /// CPR


        Questionnaire.QuestionnaireItemComponent cpr = questionnaire.addItem();
        cpr.setLinkId("CPR");
        cpr.setText("CPR Status");

        cpr.setType(Questionnaire.QuestionnaireItemType.GROUP);

        item = cpr.addItem()
                .setText("CPR Status")
                .setLinkId("CPR001.1")
                .setRepeats(false)
                .setRequired(true)
                .setType(Questionnaire.QuestionnaireItemType.REFERENCE);
        item.addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("If CPR status is transmitted, then the status code is mandatory.  This will be a straight binary choice of \"For\" or \"Not For\" resuscitation.\n" +
                        "\n" +
                        "Whilst there is a code for \"not aware of decision\", this is not a logical requirement for this dataset.  Systems that are unaware of the status will logically not be sending this group.\n" +
                        "\n" +
                        "\"For CPR\" will generally be only used when reversing a \"Not for CPR\" status.  People who haven't yet had the discussion would just not have a recorded CPR decision in file."));
        item.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedProfile")
                .setValue(new Reference("https://fhir.nhs.uk/STU3/StructureDefinition/EOL-CPRStatus-Flag-1"));
        item.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedResource")
                .setValue(new CodeType().setValue("Flag"));

        cpr.addItem()
                .setText("Reason for CPR status")
                .setLinkId("CPR001.2")
                .setType(Questionnaire.QuestionnaireItemType.STRING)
                .addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("It will be a strong recommendation that a reason for the status change is included although it is unlikely that it can be mandated from the start.  Also, as this is an MVP dataset, it could be argued that UEC are most keen on seeing the status rather than additional text.  However, in the example below if the text reads \"There is a valid advance decision to refuse CPR in the following circumstances...\", then the DNACPR decision is not for all circumstances.  In that case, the business may wish to consider whether a non-blanket DNACPR would be better recorded as an Advance Treatment Preference so that where it is appropriate can be made clear."));

        cpr.addItem()
                .setText("CPR Status Mental Capacity")
                .setLinkId("CPR001.3")
                .setType(Questionnaire.QuestionnaireItemType.STRING)
                .addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("Systems should also deliver the mental capacity information as a textual field.  The exact text will vary from system to system - below is a selection.  Some refer to \"\"consent\"\" rather than the \"\"capacity to be involved\"\".  This highlights a difference across England of this concept, which is not for the dataset to resolve.\\n" +
                        "\\n example text strings could be:\\n" +
                        "* This person has the mental capacity to participate in making these recommendations.  They have been fully involved in the decision making process.\\n" +
                        "* This person lacks the capacity to to give consent (Mental Capacity Act 2005)\\n" +
                        "* This person is less than 18 (UK except Scotland) / 16 (Scotland) years old and has sufficient maturity and understanding to participate in making this decision\\n" +
                        "* This person is less than 18 (UK except Scotland) / 16 (Scotland) years old and does not currently have sufficient maturity and understanding to participate in making this decision\\n" +
                        "* This person has the mental capacity to participate in making these recommendations, but they have declined to discuss the decision."));



        item = cpr.addItem()
                .setText("Persons involved in discussion")
                .setLinkId("CPR001.6")
                .setRepeats(true)
                .setType(Questionnaire.QuestionnaireItemType.GROUP);
        item.addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("This group lists the persons involved in the discussion.\n" +
                        "\n" +
                        "Feedback indicated it might be helpful to split those present from those involved.  For V1 this is a level of complexity that may not be supported around the country.\n" +
                        "\n" +
                        "It was also highlighted that this is a discussion with, NOT a decision by, the patient and their representatives.  CPR status is a clinical decision except in the situation where an adult with mental capacity has made the decision not to be resuscitated or where there is a Lasting Power of Attorney with authority to make such a decision.\n" +
                        "\n" +
                        "The persons involved in the discussion are most important where the patient lacks capacity."));


        Questionnaire.QuestionnaireItemComponent subitem = item.addItem()
                .setText("Coded entry for people involved in the discussion")
                //addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("This group exists to specifically list those (who were not in the discussion) that have subsequently been made aware of the decision.")
                .setLinkId("CPR001.6.1")
                .setType(Questionnaire.QuestionnaireItemType.CHOICE)
                .addOption(
                        new Questionnaire.QuestionnaireItemOptionComponent()
                                .setValue(new Coding()
                                        .setCode("713656002")
                                        .setSystem("http://snomed.info/sct")
                                        .setDisplay("Discussion about cardiopulmonary resuscitation with family member (situation)")))
                .addOption(
                        new Questionnaire.QuestionnaireItemOptionComponent()
                                .setValue(new Coding()
                                        .setCode("873351000000102")
                                        .setSystem("http://snomed.info/sct")
                                        .setDisplay("Discussion about resuscitation with carer (situation)")))
                .addOption(
                        new Questionnaire.QuestionnaireItemOptionComponent()
                                .setValue(new Coding()
                                        .setCode("873341000000100")
                                        .setSystem("http://snomed.info/sct")
                                        .setDisplay("Discussion about resuscitation (procedure)")));
        subitem = item.addItem()
                .setText("Text entry for people involved in the discussion")
              //  addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("This group exists to specifically list those (who were not in the discussion) that have subsequently been made aware of the decision.")
                .setLinkId("CPR001.6.2")
                .setRequired(true)
                .setType(Questionnaire.QuestionnaireItemType.STRING);


        item = cpr.addItem()
                .setText("Persons or organisations made aware of the decision")
                .setLinkId("CPR001.7")
                .setRepeats(true)
                .setType(Questionnaire.QuestionnaireItemType.GROUP);
        item.addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("This group exists to specifically list those (who were not in the discussion) that have subsequently been made aware of the decision."));

        subitem = item.addItem()
                .setText("Coded entry for people aware of the decision")
               // addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("This group exists to specifically list those (who were not in the discussion) that have subsequently been made aware of the decision.")
                .setLinkId("CPR001.7.1")
                .setType(Questionnaire.QuestionnaireItemType.CHOICE)//.setOptions(new Reference("Some valueSet2"))
                .addOption(
                        new Questionnaire.QuestionnaireItemOptionComponent()
                                .setValue(new Coding()
                                        .setCode("975311000000109")
                                        .setSystem("http://snomed.info/sct")
                                        .setDisplay("Carer informed of cardiopulmonary resuscitation clinical decision (situation)")))
                .addOption(
                    new Questionnaire.QuestionnaireItemOptionComponent()
                        .setValue(new Coding()
                                .setCode("975291000000108")
                                .setSystem("http://snomed.info/sct")
                                .setDisplay("Family member informed of cardiopulmonary resuscitation clinical decision (situation)")))
                                .addOption(
                    new Questionnaire.QuestionnaireItemOptionComponent()
                        .setValue(new Coding()
                                .setCode("845151000000104")
                                .setSystem("http://snomed.info/sct")
                                .setDisplay("Not aware of do not attempt cardiopulmonary resuscitation clinical decision (finding)")));
         subitem = item.addItem()
                .setText("Textual version of that person or group of people")
              //  addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("This group exists to specifically list those (who were not in the discussion) that have subsequently been made aware of the decision.")
                .setLinkId("CPR001.7.2")
                .setRequired(true)
                .setType(Questionnaire.QuestionnaireItemType.STRING);


        item = cpr.addItem()
                .setText("Professionals Involved In Decision")
                .setLinkId("CPR001.8")
                //addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("CPR Status [G14]")
                .setRepeats(true)
                .setType(Questionnaire.QuestionnaireItemType.REFERENCE);
        item.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedProfile")
                .setValue(new Reference("https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Practitioner-1"));
        item.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedResource")
                .setValue(new CodeType().setValue("Practitioner"));


        item = cpr.addItem()
                .setText("Professional Endorsing Status")
                .setLinkId("CPR001.10")
                .setRepeats(true)
                .setType(Questionnaire.QuestionnaireItemType.REFERENCE);
        item.addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("Optional group for professional endorsement, where the profession recording the status change is not senior enough to be de facto endorser."));
       
        item.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedProfile")
                .setValue(new Reference("https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Practitioner-1"));
        item.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedResource")
                .setValue(new CodeType().setValue("Practitioner"));



        // DISABILITY


        Questionnaire.QuestionnaireItemComponent disability = questionnaire.addItem();
        disability.setLinkId("DIS")
                .setText("Disabilities");
        disability.setType(Questionnaire.QuestionnaireItemType.GROUP);
/*
        item = disability.addItem()
                .setLinkId("DIS001a")
                .setText("Disability / Condition List")
                .setType(Questionnaire.QuestionnaireItemType.REFERENCE);
        item.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedProfile")
                .setValue(new Reference("https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-ProblemList-1"));
        item.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedResource")
                .setValue(new CodeType().setValue("List"));
                */

        item = disability.addItem()
                .setLinkId("DIS001.1")
                .setText("Patient Disabilities")
              
                .setRepeats(true)
                .setType(Questionnaire.QuestionnaireItemType.REFERENCE);
        item.addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("Repeating group of all current recorded disabilities."));
        
        item.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedProfile")
                .setValue(new Reference("https://fhir.hl7.org.uk/StructureDefinition/CareConnect-Condition-1"));
        item.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedResource")
                .setValue(new CodeType().setValue("Condition"));

        item = disability.addItem()
                .setLinkId("DIS001.2")
                .setText("Professional recording these changes to Disabilities")
                .setType(Questionnaire.QuestionnaireItemType.REFERENCE);
        item.addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("The professional recording the changes is mandatory as someone must have entered this data into the system.  This data may have been asked for overtly in the data entry form or may be taken from the user details of person logged in creating the record."));
       
        item.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedProfile")
                .setValue(new Reference("https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Practitioner-1"));
        item.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedResource")
                .setValue(new CodeType().setValue("Practitioner"));

        // Documentments


        Questionnaire.QuestionnaireItemComponent other = questionnaire.addItem();
        other.setLinkId("DOC")
                .setText("Other Documents")
                .setRepeats(true)
                .setType(Questionnaire.QuestionnaireItemType.GROUP)
                .addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("Details of other relevant planning documentsand where to find them."));

        other.addItem()
                .setLinkId("DOC001.1")
                .setText("Document Name")
             
                .setType(Questionnaire.QuestionnaireItemType.STRING)
                .setRequired(true)
                .addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("Description of name of the advance planning document"));

        other.addItem()
                .setLinkId("DOC001.2")
                .setText("Document Location")
               
                .setType(Questionnaire.QuestionnaireItemType.STRING)
                .addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("Location of the document"));

        other.addItem()
                .setLinkId("DOC001.3")
                .setText("Document Source")
                .setType(Questionnaire.QuestionnaireItemType.STRING)
                .addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("Description of the organisation where the document was created with the patient."))
        ;



        // EOL Register

        Questionnaire.QuestionnaireItemComponent register = questionnaire.addItem();
        register.setLinkId("EOL-Register-1");
        register.setText("Register");
        register.setType(Questionnaire.QuestionnaireItemType.GROUP);

        register
                .setText("EOL Register")
                .setLinkId("EOL")
            
                .setRepeats(false)
                .setType(Questionnaire.QuestionnaireItemType.REFERENCE)
                .addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("EoL Register "));
        
        register.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedProfile")
                .setValue(new Reference("https://fhir.nhs.uk/STU3/StructureDefinition/EOL-Register-Flag-1"));
        register.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedResource")
                .setValue(new CodeType().setValue("Flag"));

        // FUNCTIONAL

        Questionnaire.QuestionnaireItemComponent func = questionnaire.addItem();
        func.setLinkId("FUN").setText("Functional Status")
                .setRepeats(true)
              .setType(Questionnaire.QuestionnaireItemType.REFERENCE)
                .addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("Respondents were all happy to use, or move to the Karnofsky codes.  The dataset should be encouraging this move to a nationally-agreed code.  However, it is mandatory for GPs to record the Electronic Frailty Index (EFI) of the patient, so both types of code must be capable of being transmitted.\n" +
                        "\n" +
                        "Systems without this coding will always be able to transmit a textual value.\n" +
                        "\n" +
                        "The FHIR resource provides a code and then an indicator for what code is being used.  Both Karnofsky and eFI can be transmitted."))
        ;
        func.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedProfile")
                .setValue(new Reference("https://fhir.nhs.uk/STU3/StructureDefinition/CareConnect-EOL-FunctionalStatus-Observation-1"));
        func.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedResource")
                .setValue(new CodeType().setValue("Observation"));

        // LPA


        Questionnaire.QuestionnaireItemComponent lpa = questionnaire.addItem();
        lpa.setLinkId("LPA");
        lpa.setText("Lasting Power of Attorney");
        lpa.addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("Will detail what LPAs are in force and who the main contacts are wrt to each LPA.\n" +
                "\n" +
                "Some systems record all the LPA for finance, but this is outside the scope of this minimum dataset.\n" +
                "\n" +
                "NB.  Would not have an LPA HW for a child"));
        lpa.setType(Questionnaire.QuestionnaireItemType.GROUP);

        item = lpa.addItem()
                .setLinkId("LPA001.1")
                .setText("Lasting Power of Attorney For Health and Welfare")
                .setRequired(true)
                .setType(Questionnaire.QuestionnaireItemType.REFERENCE);
        item.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedProfile")
                .setValue(new Reference("https://fhir.nhs.uk/STU3/StructureDefinition/EOL-LPA-Flag-1"));
        item.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedResource")
                .setValue(new CodeType().setValue("Flag"));

        item = lpa.addItem()
                .setLinkId("LPA001.2")
                .setText("Persons Appointed")
                .setRepeats(true)
                .setType(Questionnaire.QuestionnaireItemType.REFERENCE);
        item.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedProfile")
                .setValue(new Reference("https://fhir.nhs.uk/STU3/StructureDefinition/EOL-LPA-RelatedPerson-1"));
        item.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedResource")
                .setValue(new CodeType().setValue("RelatedPerson"));


        /// EOL Preferences PREF

        Questionnaire.QuestionnaireItemComponent pref = questionnaire.addItem();
        pref.setLinkId("PREF");
        pref.setText("Preferences");
        pref.setType(Questionnaire.QuestionnaireItemType.GROUP);

        subgroup = pref.addItem()
                .setText("Preferred Place Of Death")
                .setLinkId("PRE001.1")
                //addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("Preferences [G4]")
                .setRequired(true)
                .setType(Questionnaire.QuestionnaireItemType.GROUP);


        subgroup.addItem()
                .setText("Preferred Place Of Death (Coded)")
                .setLinkId("PRE001.1.2")
                 .setType(Questionnaire.QuestionnaireItemType.CHOICE)
                .setOptions(new Reference("https://fhir.nhs.uk/STU3/ValueSet/EOL-PreferredPlaceDeath-Code-1"))
                .addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("Coded value of the preferred place of death.  Includes some codes to indicate that there is not yet (and maybe cannot be) a decision from the patient. "));

        subgroup.addItem()
                .setText("Preferred Place Of Death (Text)")
                .setLinkId("PRE001.1.3")
                .setRequired(true)
                .setType(Questionnaire.QuestionnaireItemType.STRING)
               .addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("Notes associated with the PPD code or, if not coded, text to describe the patient's preferred place of death.\\n" +
                        "\\n" +
                        "Examples include:\\n" +
                        "* Care Home\\n" +
                        "* Community Hospital\\n" +
                        "* Home\\n" +
                        "* Hospice\\n" +
                        "* Hospital\\n" +
                        "* Learning disability unit\\n" +
                        "* Mental health unit\\n" +
                        "* Not Yet Discussed\\n" +
                        "* Nursing home\\n" +
                        "* Patient Not Able To Discuss\\n" +
                        "* Patient Not Wishing To State Preference\\n" +
                        "* Residential home\\n" +
                        "* \"Other\" plus text"))
               ;

        pref.addItem()
                .setText("Preferences and Wishes")
                .setLinkId("PRE001.2")
                .setType(Questionnaire.QuestionnaireItemType.STRING)
                .addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("A free text field where overall preferences and wishes are captured.\n" +
                        "\n" +
                        "This is a catch-all data item where the whole of the patient's preferences are recorded.  This will include wishes for care and also cultural, religious and social needs.\n" +
                        "\n" +
                        "However, some systems retain the logical split between true \"\"personal preferences\"\" and other data about the patient's home and living conditions.  The dataset attempts to split these two types of data, as many systems will record them separately."))
                ;

        pref.addItem()
                .setText("Domestic Access and Information")
                .setLinkId("PRE001.3")
                .setType(Questionnaire.QuestionnaireItemType.STRING)
                .addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("A free text field for information relating to home, access and other practical domestic and living information relating to the patient."))
                ;

        item = pref.addItem()
                .setLinkId("PRE001.4")
                .setRequired(true)
                .setText("Preferences Date Recorded")
                .setType(Questionnaire.QuestionnaireItemType.DATETIME);

        item = pref.addItem()
                .setLinkId("PRE001.5")
                .setText("Preferences Author")
                .setRequired(true)
                .setType(Questionnaire.QuestionnaireItemType.REFERENCE);
        item.addExtension().setUrl("http://hl7.org/fhir/StructureDefinition/designNote").setValue(new MarkdownType("The professional recording the changes is mandatory as someone must have entered this data into the system.  This data may have been asked for overtly in the data entry form or may be taken from the user details of person logged in creating the record."));

        item.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedProfile")
                .setValue(new Reference("https://fhir.nhs.uk/STU3/StructureDefinition/CareConnect-Practitioner-1"));
        item.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedResource")
                .setValue(new CodeType().setValue("Practitioner"));




        // Prognosis


        Questionnaire.QuestionnaireItemComponent prognosis = questionnaire.addItem();
        prognosis.setLinkId("PRO");
        prognosis.setText("Prognosis")
                .setType(Questionnaire.QuestionnaireItemType.REFERENCE);
        prognosis.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedProfile")
                .setValue(new Reference("https://fhir.nhs.uk/STU3/StructureDefinition/EOL-Prognosis-ClinicalImpression-1"));
        prognosis.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedResource")
                .setValue(new CodeType().setValue("ClinicalImpression"));








        return questionnaire;
    }


    private InputStream getResourceAsStream(String resource) {
        final InputStream in
                = getContextClassLoader().getResourceAsStream(resource);

        return in == null ? getClass().getResourceAsStream(resource) : in;
    }

    private ClassLoader getContextClassLoader() {
        return Thread.currentThread().getContextClassLoader();
    }


    public void saveBundle(String fileName, String subfolder, Bundle bundle) throws Exception {
        File directory = new File(String.valueOf("/output/" + subfolder));

        if (!directory.exists()) {
            directory.mkdir();
        }
        FileOutputStream outputStream = new FileOutputStream(("/output/" + subfolder + "/" + fileName));
        byte[] strToBytes = ctxFHIR.newXmlParser().setPrettyPrint(true).encodeResourceToString(bundle).getBytes();
        outputStream.write(strToBytes);

        outputStream.close();
    }





    public Bundle loadEOLC() {

        String nhsNumber= "9658220142";
        System.out.println("Posting Patient NHS Number "+nhsNumber);

        Calendar cal = Calendar.getInstance();


        Date oneHourBack = cal.getTime();
        fhirBundle = new FhirBundleUtil(Bundle.BundleType.COLLECTION);

        doSetUp();

        Bundle patientBundle = getPatientBundle(nhsNumber);


        fhirBundle.processBundleResources(patientBundle);

        Bundle bundle = new Bundle();

        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

        bundle.addEntry().setResource(yas);
        bundle.addEntry().setResource(lth);
        bundle.addEntry().setResource(midyorks);
        getPatientBundle("9658220142");

        QuestionnaireResponse eolc = new QuestionnaireResponse();
        eolc.setId(fhirBundle.getNewId(eolc));

        eolc.setSubject(new Reference(uuidtag + fhirBundle.getPatient().getId()));
        eolc.getIdentifier().setSystem(midYorksQuestionnaireResponseIdentifier).setValue("yas0");

        Reference qRef = new Reference("https://fhir.nhs.uk/STU3/Questionnaire/CareConnect-EOLC-1");
        eolc.setQuestionnaire(qRef);
        eolc.setStatus(QuestionnaireResponse.QuestionnaireResponseStatus.COMPLETED);
        try {
            eolc.setAuthored(sdf.parse("2018-08-01"));
        } catch (Exception ex) {
        }

        QuestionnaireResponse.QuestionnaireResponseItemComponent adv = eolc.addItem()
                .setLinkId("ATP")
                .setText("Advanced Treatment Preferences");


        QuestionnaireResponse.QuestionnaireResponseItemComponent consent = eolc.addItem()
                .setLinkId("CON")
                .setText("Consent");

        QuestionnaireResponse.QuestionnaireResponseItemComponent cpr = eolc.addItem()
                .setLinkId("CPR")
                .setText("CPR Status");

        QuestionnaireResponse.QuestionnaireResponseItemComponent disability = eolc.addItem()
                .setLinkId("DIS")
                .setText("Disabilities");

        QuestionnaireResponse.QuestionnaireResponseItemComponent other = eolc.addItem()
                .setLinkId("DOC")
                .setText("Other Documents");

        QuestionnaireResponse.QuestionnaireResponseItemComponent register = eolc.addItem()
                .setLinkId("EOL")
                .setText("EOL Register");

        QuestionnaireResponse.QuestionnaireResponseItemComponent func = eolc.addItem()
                .setLinkId("FUN")
                .setText("Functional Status");

        QuestionnaireResponse.QuestionnaireResponseItemComponent lpa = eolc.addItem()
                .setLinkId("LPA")
                .setText("Lasting Power of Attorney");


        QuestionnaireResponse.QuestionnaireResponseItemComponent preferences = eolc.addItem()
                .setLinkId("PREF")
                .setText("Preferences");


        QuestionnaireResponse.QuestionnaireResponseItemComponent prog = eolc.addItem()
                .setLinkId("PRO")
                .setText("Prognosis");

        bundle.addEntry().setResource(eolc);

        Practitioner consultant = new Practitioner();
        //consultant.getMeta().getProfile().add(new UriType("https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Practitioner-1"));
        consultant.setId(fhirBundle.getNewId(consultant));
        consultant.addIdentifier().setSystem("https://fhir.nhs.uk/Id/sds-user-id").setValue("C4012900");
        consultant.addName().setFamily("Rodger").addGiven("KF");
        bundle.addEntry().setResource(consultant);

        eolc.setAuthor(new Reference(uuidtag + consultant.getId()));





        Practitioner pal = new Practitioner();
       // pal.getMeta().getProfile().add(new UriType("https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Practitioner-1"));

        pal.setId(fhirBundle.getNewId(pal));
        pal.addIdentifier().setSystem(interOpenPractitionerIdentifier).setValue("x2900");
        pal.addName().setFamily("Simpson").addGiven("Mike");
        pal.addTelecom().setSystem(ContactPoint.ContactPointSystem.PHONE).setValue("07855 442038").setUse(ContactPoint.ContactPointUse.MOBILE);
        bundle.addEntry().setResource(pal);


// Advanced Treatment Preferences


        Condition condition = new Condition();
        //condition.getMeta().getProfile().add(new UriType("https://fhir.hl7.org.uk/StructureDefinition/CareConnect-Condition-1"));
        condition.setId(fhirBundle.getNewId(condition));
        condition.setSubject(new Reference(uuidtag + fhirBundle.getPatient().getId()));
        condition.addIdentifier().setSystem(midYorksConditionIdentifier).setValue("crm1");
        condition.setClinicalStatus(Condition.ConditionClinicalStatus.ACTIVE);
        condition.setAsserter(new Reference(uuidtag + consultant.getId()));
        /*
        condition.addCategory().addCoding()
                .setSystem("https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-ConditionCategory-1")
                .setCode("problem-list-item")
                .setDisplay("Problem List Item");
                */
        condition.getCode()
                .setText("Breathlessness")
                .addCoding()
                    .setDisplay("Dyspnea")
                    .setCode("267036007")
                    .setSystem("http://snomed.info/sct");
        try {
            condition.setOnset(new DateTimeType().setValue(sdf.parse("2018-08-01")));
        } catch (Exception ex) {
        }
        bundle.addEntry().setResource(condition);

        CarePlan carePlan = new CarePlan();
        //carePlan.getMeta().getProfile().add(new UriType("https://fhir.nhs.uk/STU3/StructureDefinition/EOL-ATP-CarePlan-1"));

        carePlan.setId(fhirBundle.getNewId(carePlan));
        carePlan.setSubject(new Reference(uuidtag + fhirBundle.getPatient().getId()));
        carePlan.addIdentifier().setSystem(midYorksCarePlanIdentifier).setValue("blm1");
        // Not required carePlan.addAddresses(new Reference(uuidtag + condition.getId()));
        carePlan.addAuthor(new Reference(uuidtag + consultant.getId()));

        carePlan.addCategory()
                .addCoding()
                .setCode("736373009")
                .setSystem("http://snomed.info/sct")
                .setDisplay("End of life care plan");
        carePlan.setStatus(CarePlan.CarePlanStatus.ACTIVE);
        carePlan.setIntent(CarePlan.CarePlanIntent.PLAN);
        try {
            carePlan.getPeriod().setStart(sdf.parse("2018-08-01"));
        } catch (Exception ex) {
        }

        carePlan.addActivity()
                .getDetail().setStatus(CarePlan.CarePlanActivityStatus.NOTSTARTED).setDescription("Nebulizer can be used to make patient more comfortable")
                .getCode().addCoding().setCode("445141005").setSystem("http://snomed.info/sct").setDisplay("Nebuliser therapy using mask");
        carePlan.addActivity()
                .getDetail().setStatus(CarePlan.CarePlanActivityStatus.NOTSTARTED).setDescription("Wants to avoid hospital admission if possible, but would want to consider options as need arises.")
                .getCode().addCoding().setCode("735324008").setSystem("http://snomed.info/sct").setDisplay("Treatment escalation plan");
        carePlan.addActivity()
                .getDetail().setStatus(CarePlan.CarePlanActivityStatus.NOTSTARTED).setDescription("[18 Sept 2018] This plan is known to the Harrogate Palliative Care Team. If advice needed Monday-Friday 0830-1700 contact the team on 01423 553464. Outside these hours contact Saint Michael's Hospice (Harrogate) on 01423 872 658. [21 Nov 2018] At risk of hypercalcaemia (Corr Ca+ 3.01 on 20th Nov) - symptoms were increased confusion and drowsiness.")
                .getCode().addCoding().setCode("702779007").setSystem("http://snomed.info/sct").setDisplay("Emergency health care plan agreed");
        bundle.addEntry().setResource(carePlan);


        QuestionnaireResponse.QuestionnaireResponseItemComponent subgroup = adv.addItem()
                .setLinkId("ATP001.1")
                .setText("Clinical Problems and Advised Interventions");

        subgroup.addItem()
                .setLinkId("ATP001.1.1")
                .setText("ATP Problems")
                .addAnswer()
                .setValue(new Reference(uuidtag + condition.getIdElement().getIdPart()));

        subgroup.addItem()
                .setLinkId("ATP001.1.2")
                .setText("Treatment Level")
                .addAnswer()
                .setValue(new Reference(uuidtag + carePlan.getIdElement().getIdPart()));

        Procedure procedure = new Procedure();
        procedure.setId(fhirBundle.getNewId(procedure));
        procedure.setSubject(new Reference(uuidtag + fhirBundle.getPatient().getId()));
        procedure.addIdentifier().setSystem(midYorksProcedureIdentifier).setValue("adrt");
        procedure.setStatus(Procedure.ProcedureStatus.COMPLETED);
        procedure.getCode().addCoding().setSystem(SNOMEDCT).setCode("376201000000102").setDisplay("Issue of palliative care anticipatory medication box (procedure)");
        bundle.addEntry().setResource(procedure);

        adv.addItem()
                .setLinkId("ATP001.2")
                .setText("Anticipatory medicines/just in case box issued")
                .addAnswer()
                .setValue(new Reference(uuidtag + procedure.getIdElement().getIdPart()));


        // Add in ADRT
        Flag adrt = new Flag();
        adrt.setId(fhirBundle.getNewId(adrt));
        adrt.setSubject(new Reference(uuidtag + fhirBundle.getPatient().getId()));
        adrt.addIdentifier().setSystem(midYorksFlagIdentifier).setValue("adrt");
        adrt.setStatus(Flag.FlagStatus.ACTIVE);
        adrt.getCode().addCoding()
                .setCode("816301000000100")
                .setSystem("http://snomed.info/sct")
                .setDisplay("Has advance decision to refuse treatment (Mental Capacity Act 2005) (finding)");


        adrt.setAuthor(new Reference(uuidtag + midyorks.getIdElement().getIdPart()));
        bundle.addEntry().setResource(adrt);

        adv.addItem()
                .setLinkId("ATP001.3")
                .setText("Advance Decision to Refuse Treatment")
                .addAnswer()
                .setValue(new Reference(uuidtag + adrt.getIdElement().getIdPart()));

        QuestionnaireResponse.QuestionnaireResponseItemComponent group = adv.addItem()
                .setLinkId("ATP001.4")
                .setText("ReSPECT Care");

         group.addItem()
                .setLinkId("ATP001.4.1")
                .setText("ReSPECT Patient Care Priority - Scale")
                .addAnswer()
                .setValue(new IntegerType().setValue(50));

        group.addItem()
                .setLinkId("ATP001.4.2")
                .setText("ReSPECT Patient Care Priority - Textual")
                .addAnswer()
                .setValue(new StringType().setValue("Patient is to be treated and made as comfortable as possible."));

        try {
            adv.addItem()
                    .setLinkId("ATP001.5")
                    .setText("Date of change in list of advance treatment preferences")
                    .addAnswer()
                    .setValue(new DateType().setValue(sdf.parse("2018-08-01")));
        } catch (Exception ex) {
        }
        adv.addItem()
                .setLinkId("ATP001.6")
                .setText("Professional recording these changes to this list of Problems and Interventions")
                .addAnswer()
                .setValue(new Reference(uuidtag + consultant.getIdElement().getIdPart()));


        // EOL Register


        Flag flag = new Flag();
        flag.setId(fhirBundle.getNewId(flag));
        flag.setSubject(new Reference(uuidtag + fhirBundle.getPatient().getId()));
        flag.addIdentifier().setSystem(midYorksFlagIdentifier).setValue("unusmy9");
        flag.setStatus(Flag.FlagStatus.ACTIVE);
        flag.getCode().addCoding()
                .setCode("526631000000108")
                .setSystem("http://snomed.info/sct")
                .setDisplay("On end of life care register (finding)");
        try {
            flag.getPeriod().setStart(sdf.parse("2018-08-01"));
        } catch (Exception ex) {
        }

        flag.setAuthor(new Reference(uuidtag + midyorks.getIdElement().getIdPart()));
        bundle.addEntry().setResource(flag);

        register
                .addAnswer()
                .setValue(new Reference(uuidtag + flag.getIdElement().getIdPart()));


        // Consent

        Consent consentR = new Consent();
        consentR.setId(fhirBundle.getNewId(consentR));
        consentR.getIdentifier().setSystem(tppConsentIdentifier).setValue("consent1");
        consentR.setStatus(Consent.ConsentState.ACTIVE);
        consentR.setPatient(new Reference(uuidtag + fhirBundle.getPatient().getId()));
        try {
            consentR.setDateTime(sdf.parse("2018-08-20"));
        } catch (Exception ex) {
        }
        consentR.addPurpose()
                .setCode("882981000000105")
                .setDisplay("Consent given by legitimate patient representative for sharing end of life care coordination record (finding)")
                .setSystem(SNOMEDCT);

        CodeableConcept role =new CodeableConcept();
        role.addCoding().setSystem("http://hl7.org/fhir/v3/ParticipationType").setCode("PROV").setDisplay("Healthcare Provider");
        consentR.addActor()
                .setRole(role)
                .setReference(new Reference(uuidtag + consultant.getId()));
        consentR.addPolicy()
                .setAuthority("http://fhir.nhs.uk/Policy/EOLC");
        bundle.addEntry().setResource(consentR);

        consent.addAnswer().setValue(new Reference(uuidtag + consentR.getIdElement().getIdPart()));


        // CPR

        flag = new Flag();
        flag.setId(fhirBundle.getNewId(flag));
        flag.setSubject(new Reference(uuidtag + fhirBundle.getPatient().getId()));
        flag.addIdentifier().setSystem(midYorksFlagIdentifier).setValue("unusmy8");
        flag.setStatus(Flag.FlagStatus.ACTIVE);
        flag.getCode().addCoding()
                .setCode("450476008")
                .setSystem("http://snomed.info/sct")
                .setDisplay("Not for attempted cardiopulmonary resuscitation");

        flag.setAuthor(new Reference(uuidtag + midyorks.getIdElement().getIdPart()));
        bundle.addEntry().setResource(flag);

        cpr.addItem()
                .setLinkId("CPR001.1")
                .setText("CPR Status")
                .addAnswer()
                .setValue(new Reference(uuidtag +flag.getIdElement().getIdPart()));

        cpr.addItem()
                .setLinkId("CPR001.2")
                .setText("Reason for CPR status")
                .addAnswer()
                .setValue(new StringType("The outcome of the CPR would not be of overall benefit to the patient"));

        cpr.addItem()
                .setLinkId("CPR001.3")
                .setText("CPR Status Mental Capacity")
                .addAnswer()
                .setValue(new StringType("This person has the mental capacity to participate in making these recommendations.  They have been fully involved in the decision making process."));

        Coding persons = new Coding();
        persons
                .setSystem("http://snomed.info/sct")
                .setCode("713656002")
                .setDisplay("Discussion about cardiopulmonary resuscitation with family member (situation)");

        group = cpr.addItem()
                .setLinkId("CPR001.6");

        group.addItem()
                .setLinkId("CPR001.6.1")
                .setText("Coded entry for people involved in the discussion")
                .addAnswer()
                .setValue(persons);
        group.addItem()
                .setLinkId("CPR001.6.2")
                .setText("Text entry for people involved in the discussion")
                .addAnswer()
                .setValue(new StringType().setValue("Supporting information not provided."));

        Coding aware = new Coding();
        aware
                .setSystem("http://snomed.info/sct")
                .setCode("975291000000108")
                .setDisplay("Family member informed of cardiopulmonary resuscitation clinical decision (situation)");

        group = cpr.addItem()
                .setLinkId("CPR001.7");

        group.addItem()
                .setLinkId("CPR001.7.1")
                .setText("Coded entry for people aware of the decision")
                .addAnswer()
                .setValue(aware);

        group.addItem()
                .setLinkId("CPR001.7.2")
                .setText("Textual version of that person or group of people")
                .addAnswer()
                .setValue(new StringType().setValue("Uncle Bob has been made aware of the decision"));

        cpr.addItem()
                .setLinkId("CPR001.8")
                .setText("Professionals Involved In Decision")
                .addAnswer()
                .setValue(new Reference(uuidtag + consultant.getId()));

        cpr.addItem()
                .setLinkId("CPR001.10")
                .setText("Professional Endorsing Status")
                .addAnswer()
                .setValue(new Reference(uuidtag + consultant.getId()));


        /// OTHER

        other.addItem()
                .setLinkId("DOC001.1")
                .setText("Document Name")
                .addAnswer()
                .setValue(new StringType("Lasting power of attorney offical document"));
        other.addItem()
                .setLinkId("DOC001.2")
                .setText("Document Location")
                .addAnswer()
                .setValue(new StringType("Top left drawer in cabinet located in dining room. Documents are inside blue folder."));
        other.addItem()
                .setLinkId("DOC001.3")
                .setText("Document Source")
                .addAnswer()
                .setValue(new StringType("Document drawn up at A B Solictors, Newcastle"));


        // Preferences

        group = preferences.addItem().setLinkId("PRE001.1").setText("Preferred Place Of Death");

        group.addItem()
                .setLinkId("PRE001.1.3")
                .setText("Preferred Place Of Death (Text)")
                .addAnswer()
                .setValue(new StringType("At home with family"));

        preferences.addItem()
                .setLinkId("PRE001.2")
                .setText("Preferences and Wishes")
                .addAnswer()
                .setValue(new StringType("To be made comfortable and looking out onto garden"));
        preferences.addItem()
                .setLinkId("PRE001.3")
                .setText("Domestic Access and Information")
                .addAnswer()
                .setValue(new StringType("A key safe is provided to allow access to the property. Carer and related contact has code."));

        try {
            preferences.addItem()
                    .setLinkId("PRE001.4")
                    .setText("Preferences Date Recorded")
                    .addAnswer()
                    .setValue(new DateTimeType().setValue(sdf.parse("2019-02-11")));
        } catch (Exception ex) {

        }

        preferences.addItem()
                .setLinkId("PRE001.5")
                .setText("Preferences Author")
                .addAnswer()
                .setValue(new Reference(uuidtag + consultant.getId()));


        // Prognosis


        ClinicalImpression prognosis = new ClinicalImpression();
        prognosis.setId(fhirBundle.getNewId(prognosis));
        prognosis.setSubject(new Reference(uuidtag + fhirBundle.getPatient().getId()));
        prognosis.setStatus(ClinicalImpression.ClinicalImpressionStatus.COMPLETED);
        prognosis.addIdentifier().setSystem(westRidingClinicalImpressionIdentifier).setValue("akm1");
        prognosis.setAssessor(new Reference(uuidtag + consultant.getId()));
        try {
            prognosis.setDate(sdf.parse("2018-08-20"));
        } catch (Exception ex) {
        }

        prognosis.addPrognosisCodeableConcept()
               .setText("Limited life expectancy of approximately one year")
                .addCoding()
                    .setSystem(SNOMEDCT)
                    .setCode("845701000000104")
                    .setDisplay("Gold standards framework prognostic indicator stage A (blue) - year plus prognosis (finding)");
        prognosis.setDescription("Limited life expectancy of approximately one year");
        bundle.addEntry().setResource(prognosis);

        prog
                .addAnswer()
                .setValue(new Reference(uuidtag +prognosis.getIdElement().getIdPart()));



        // Functional Status

        Observation observation = new Observation();
        observation.getMeta().getProfile().add(new UriType("https://fhir.nhs.uk/STU3/StructureDefinition/CareConnect-EOL-FunctionalStatus-Observation-1"));
        observation.setId(fhirBundle.getNewId(observation));
        observation.setSubject(new Reference(uuidtag + fhirBundle.getPatient().getId()));
        observation.addIdentifier().setSystem("urn:ietf:rfc:3986").setValue("38e8e6ed-eb91-4af8-afa4-ff8fdb7be93c");
        /*
        try {
            observation.setEffective(new DateTimeType(sdf.parse("2018-08-01")));
        } catch (Exception ex) {
        }*/
        observation.addPerformer(new Reference(uuidtag + consultant.getId()));
        observation.setStatus(Observation.ObservationStatus.FINAL);
        observation.getCode().addCoding()
                .setSystem("http://snomed.info/sct")
                .setCode("761869008")
                .setDisplay("Karnofsky Performance Status score (observable entity)");
        observation.getCode().setText("Performance Status score");

        observation.setValue(new Quantity()
                .setValue(
                        new BigDecimal(90))
                .setUnit("score")
                .setSystem("http://unitsofmeasure.org")
                .setCode("score"));
        bundle.addEntry().setResource(observation);

        func.addAnswer()
                .setValue(new Reference(uuidtag +observation.getIdElement().getIdPart()));


        // 'disability'


        condition = new Condition();
        condition.setId(fhirBundle.getNewId(condition));
        condition.setSubject(new Reference(uuidtag + fhirBundle.getPatient().getId()));
        condition.addIdentifier().setSystem(midYorksConditionIdentifier).setValue("akm2");
        condition.setClinicalStatus(Condition.ConditionClinicalStatus.ACTIVE);
        condition.setAsserter(new Reference(uuidtag + consultant.getId()));
        condition.getCode().addCoding()
                .setDisplay("Asthma (disorder)")
                .setCode("195967001")
                .setSystem("http://snomed.info/sct");
        try {
            condition.setOnset(new DateTimeType().setValue(sdf.parse("2002-03-11")));
        } catch (Exception ex) {
        }

        bundle.addEntry().setResource(condition);

        disability.addItem()
                .setLinkId("DIS001.1")
                .setText("Patient Disabilities")
                .addAnswer()
                .setValue(new Reference(uuidtag +condition.getIdElement().getIdPart()));

        disability.addItem()
                .setLinkId("DIS001.2")
                .setText("Professional recording these changes to Disabilities")
                .addAnswer()
                .setValue(new Reference(uuidtag +consultant.getIdElement().getIdPart()));


        // LPA

        Flag lpaf = new Flag();
        lpaf.setId(fhirBundle.getNewId(lpaf));
        lpaf.setSubject(new Reference(uuidtag + fhirBundle.getPatient().getId()));
        lpaf.addIdentifier().setSystem(midYorksFlagIdentifier).setValue("lpa");
        lpaf.setStatus(Flag.FlagStatus.ACTIVE);
        lpaf.getCode().addCoding()
                .setCode("816361000000101")
                .setSystem("http://snomed.info/sct")
                .setDisplay("Has appointed person with personal welfare lasting power of attorney (Mental Capacity Act 2005) (finding)");

        lpaf.setAuthor(new Reference(uuidtag + midyorks.getIdElement().getIdPart()));
        bundle.addEntry().setResource(lpaf);

        lpa.addItem()
                .setLinkId("LPA001.1")
                .setText("Lasting Power of Attorney For Health and Welfare")
                .addAnswer()
                .setValue(new Reference(uuidtag +lpaf.getIdElement().getIdPart()));

        RelatedPerson person = new RelatedPerson();
        person.setId(fhirBundle.getNewId(person));
        person.addIdentifier()
                .setValue("person1")
                .setSystem(tppNOKIdentifier);
        person.setPatient(new Reference(uuidtag + fhirBundle.getPatient().getId()));
        CodeableConcept relation = new CodeableConcept();
        relation.addCoding().setSystem("http://hl7.org/fhir/v3/RoleCode").setDisplay("healthcare power of attorney").setCode("HPOWATT");
        person.addName().setFamily("Kewn").addPrefix("Mr").addGiven("E");

        person.setRelationship(relation);

        bundle.addEntry().setResource(person);

        lpa.addItem()
                .setLinkId("LPA001.2")
                .setText("Persons Appointed")
                .addAnswer()
                .setValue(new Reference(uuidtag + person.getIdElement().getIdPart()));

        fhirBundle.processBundleResources(bundle);

        System.out.println(ctxFHIR.newXmlParser().setPrettyPrint(true).encodeResourceToString(fhirBundle.getFhirDocument()));


        try {
            saveBundle(nhsNumber + ".xml", "patient", fhirBundle.getFhirDocument());
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        }
        MethodOutcome outcome = client.create().resource(fhirBundle.getFhirDocument()).execute();

        return fhirBundle.getFhirDocument();
    }


     /*
        CareTeam careTeamH = new CareTeam();
        careTeamH.setId(fhirBundle.getNewId(careTeamH));
        careTeamH.setSubject(new Reference(uuidtag + fhirBundle.getPatient().getId()));
        careTeamH.addIdentifier().setSystem(westRidingCareTeamIdentifier).setValue("blm2");
        careTeamH.addParticipant().setMember(new Reference(uuidtag + pal.getId()));
        careTeamH.setName("Paliative Care Milworthy Healthcare Trust");
        careTeamH.addNote().setText("Lead case consultant");

        bundle.addEntry().setResource(careTeamH);

        CareTeam careTeam = new CareTeam();
        careTeam.setId(fhirBundle.getNewId(careTeam));
        careTeam.setSubject(new Reference(uuidtag + fhirBundle.getPatient().getId()));
        careTeam.addIdentifier().setSystem(westRidingCareTeamIdentifier).setValue("blm1");
        careTeam.addParticipant().setMember(new Reference(uuidtag + consultant.getId()));
        careTeam.setName("Milworthy Emergency Support Team");
        careTeam.addNote().setText("24 hour emergency support team");

        bundle.addEntry().setResource(careTeam);
*/


    public void doSetUp() {

        yas = getOrganization("RX8");
        yas.setId(fhirBundle.getNewId(yas));

        lth = getOrganization("RR8");
        lth.setId(fhirBundle.getNewId(lth));

        hdft = getOrganization("RCD");
        hdft.setId(fhirBundle.getNewId(hdft));

        midyorks = getOrganization("RXF");
        midyorks.setId(fhirBundle.getNewId(midyorks));


        jimmy = new Location();
        jimmy.setId(fhirBundle.getNewId(jimmy));
        jimmy.setStatus(Location.LocationStatus.ACTIVE);
        jimmy.setName("St James's University Hospital: Emergency Department");
        jimmy.setDescription("St James's University Hospital: Emergency Department");
        jimmy.getType().addCoding()
                .setSystem("http://hl7.org/fhir/v3/RoleCode")
                .setCode("ETU")
                .setDisplay("Emergency Trauma Unit");
        jimmy.addTelecom()
                .setSystem(ContactPoint.ContactPointSystem.PHONE)
                .setValue("airwave-27051940")
                .setUse(ContactPoint.ContactPointUse.MOBILE);
        jimmy.addIdentifier().setSystem(yasLocationIdentifier).setValue("RR8-ED");
        jimmy.getPhysicalType().addCoding()
                .setSystem("http://hl7.org/fhir/location-physical-type")
                .setCode("bu")
                .setDisplay("Building");
        jimmy.getPosition()
                .setAltitude(0)
                .setLatitude(53.80634615690993)
                .setLongitude(-1.5230420347013478);
        jimmy.setManagingOrganization(new Reference(uuidtag + lth.getIdElement().getIdPart()));


        pinderfields = new Location();
        pinderfields.setId(fhirBundle.getNewId(pinderfields));
        pinderfields.setStatus(Location.LocationStatus.ACTIVE);
        pinderfields.setName("Pinderfields: Emergency Department");
        pinderfields.setDescription("Pinderfields: Emergency Department");
        pinderfields.getType().addCoding()
                .setSystem("http://hl7.org/fhir/v3/RoleCode")
                .setCode("ETU")
                .setDisplay("Emergency Trauma Unit");
        pinderfields.addTelecom()
                .setSystem(ContactPoint.ContactPointSystem.PHONE)
                .setValue("airwave-87351940")
                .setUse(ContactPoint.ContactPointUse.MOBILE);
        pinderfields.addIdentifier().setSystem(yasLocationIdentifier).setValue("RXF-EDP");
        pinderfields.getPhysicalType().addCoding()
                .setSystem("http://hl7.org/fhir/location-physical-type")
                .setCode("bu")
                .setDisplay("Building");

        pinderfields.setManagingOrganization(new Reference(uuidtag + midyorks.getIdElement().getIdPart()));


    }


    private Observation createObservationCoded(String valueCode, String valueDescription, String display, String code, Encounter encounter) {
        Observation observation = createObservation(null, null, display, code, encounter);

        if (valueCode != null) {
            CodeableConcept concept = new CodeableConcept();
            concept.addCoding()
                    .setSystem("http://snomed.info/sct")
                    .setCode(valueCode)
                    .setDisplay(valueDescription);

            observation.setValue(concept);
        }

        return observation;
    }

    private Observation createObservationBP(String sys, String dia, String display, String code, Encounter encounter) {
        Observation observation = createObservation(null, null, display, code, encounter);

        observation.addCategory().addCoding()
                .setSystem("http://hl7.org/fhir/observation-category")
                .setCode("vital-signs")
                .setDisplay("Vital Signs");

        Observation.ObservationComponentComponent sysComp = observation.addComponent();
        sysComp.getCode().addCoding()
                .setCode("72313002")
                .setDisplay("Systolic arterial pressure")
                .setSystem("http://snomed.info/sct");
        sysComp.setValue(
                new Quantity()
                        .setValue(new BigDecimal(sys))
                        .setUnit("mm[Hg]")
                        .setSystem("http://unitsofmeasure.org")
                        .setCode("mm[Hg]"));

        Observation.ObservationComponentComponent diaComp = observation.addComponent();
        diaComp.getCode().addCoding()
                .setCode("1091811000000102")
                .setDisplay("Diastolic arterial pressure")
                .setSystem("http://snomed.info/sct");
        diaComp.setValue(
                new Quantity()
                        .setValue(new BigDecimal(dia))
                        .setUnit("mm[Hg]")
                        .setSystem("http://unitsofmeasure.org")
                        .setCode("mm[Hg]"));

        return observation;
    }

    private Observation createObservation(String value, String valueUnits, String display, String code, Encounter encounter) {
        Observation observation = new Observation();

        observation.setId(fhirBundle.getNewId(observation));
        //observation.setMeta(new Meta().addProfile(CareConnectProfile.Observation_1));


        observation.addIdentifier()
                .setSystem(yasObservationIdentifier)
                .setValue(obsNo.toString());
        obsNo++;

        observation.setSubject(new Reference(uuidtag + fhirBundle.getPatient().getId()));

        observation.setStatus(Observation.ObservationStatus.FINAL);

        observation.setContext(new Reference((uuidtag + encounter.getId())));
        observation.getCode().addCoding()
                .setDisplay(display)
                .setSystem("http://snomed.info/sct")
                .setCode(code);

        // Not converted unit and code correctly.
        if (value != null) {
            if (!code.equals("1104051000000101")) {
                observation.addCategory().addCoding()
                        .setSystem("http://hl7.org/fhir/observation-category")
                        .setCode("vital-signs")
                        .setDisplay("Vital Signs");
            } else {
                observation.addCategory().addCoding()
                        .setSystem("http://hl7.org/fhir/observation-category")
                        .setCode("survey")
                        .setDisplay("Survey");
            }
        }
        try {
            Calendar cal = Calendar.getInstance();

            observation.setEffective(new DateTimeType(cal.getTime()));

        } catch (Exception e1) {
            // TODO Auto-generated catch block
        }

        if (value != null) {
            observation.setValue(
                    new Quantity()
                            .setValue(new BigDecimal(value))
                            .setUnit(valueUnits)
                            .setSystem("http://unitsofmeasure.org")
                            .setCode(valueUnits));

        }

        return observation;
    }


    private Bundle getPatientBundle(String NHSNumber) {

        IGenericClient callclient = clientGPC;
        Bundle bundle = callclient
                .search()
                .forResource(Patient.class)
                .where(Patient.IDENTIFIER.exactly().systemAndCode("https://fhir.nhs.uk/Id/nhs-number", NHSNumber))
                //
                .returnBundle(Bundle.class)
                .execute();

        if (bundle.getEntry().size() > 0) {
            Patient patient = (Patient) bundle.getEntry().get(0).getResource();
            if (patient.hasManagingOrganization()) {

                Organization organization = callclient.read().resource(Organization.class).withId(patient.getManagingOrganization().getReference()).execute();
                organization.setId(fhirBundle.getNewId(organization));
                patient.setManagingOrganization(new Reference(uuidtag + organization.getId()));
                bundle.addEntry().setResource(organization);
            }
            if (patient.hasGeneralPractitioner()) {

                Practitioner practitioner = callclient.read().resource(Practitioner.class).withId(patient.getGeneralPractitioner().get(0).getReference()).execute();
                practitioner.setId(fhirBundle.getNewId(practitioner));
                patient.getGeneralPractitioner().get(0).setReference(uuidtag + practitioner.getId());
                bundle.addEntry().setResource(practitioner);
            }
        }

        for (Bundle.BundleEntryComponent entry : bundle.getEntry()) {
            if (entry.getResource() instanceof Patient) {
                Patient patient = (Patient) entry.getResource();
                for (Identifier identifier : patient.getIdentifier()) {
                    if (identifier.hasSystem()) {
                        if (identifier.getSystem().contains("https://fhir.nhs.uk/Id/nhs-number")) {
                            identifier.setUse(Identifier.IdentifierUse.OFFICIAL);
                        }
                    }
                }
            }
        }
        return bundle;
    }


    private Practitioner getPractitioner(String sdsCode) {
        Practitioner practitioner = null;
        Bundle bundle = client
                .search()
                .forResource(Practitioner.class)
                .where(Practitioner.IDENTIFIER.exactly().code(sdsCode))
                .returnBundle(Bundle.class)
                .execute();
        if (bundle.getEntry().size() > 0) {
            if (bundle.getEntry().get(0).getResource() instanceof Practitioner)
                practitioner = (Practitioner) bundle.getEntry().get(0).getResource();

        }
        return practitioner;
    }

    private Organization getOrganization(String sdsCode) {


        Organization organization = null;
        Bundle bundle = clientODS
                .search()
                .forResource(Organization.class)
                .where(Organization.IDENTIFIER.exactly().code(sdsCode))

                .returnBundle(Bundle.class)
                .execute();
        if (bundle.getEntry().size() > 0) {
            if (bundle.getEntry().get(0).getResource() instanceof Organization)
                organization = (Organization) bundle.getEntry().get(0).getResource();

        }
        return organization;
    }


    private MedicationDispense getDispense(Patient patient, Medication medication, Encounter encounter, MedicationRequest request, Practitioner practitioner, String id, String date) {

        SimpleDateFormat sdt = new SimpleDateFormat("yyyy-MM-dd HH:mm");
        MedicationDispense dispense = new MedicationDispense();
        dispense.setId(fhirBundle.getNewId(dispense));
        dispense.addIdentifier().setSystem(interOpenMedicationDispenseIdentifier).setValue(id);
        dispense.setSubject(new Reference(uuidtag + patient.getId()));
        dispense.setMedication(new Reference(uuidtag + medication.getId()));
        dispense.setStatus(MedicationDispense.MedicationDispenseStatus.COMPLETED);
        dispense.setContext(new Reference(uuidtag + encounter.getId()));
        try {
            dispense.setWhenHandedOver(sdt.parse(date));
        } catch (Exception ex) {
        }
        dispense.addAuthorizingPrescription(new Reference(uuidtag + request.getId()));
        dispense.addPerformer().setActor(new Reference(uuidtag + practitioner.getId()));
        return dispense;
    }


    private MedicationAdministration getAdministration(Patient patient, Medication medication, Encounter encounter, MedicationRequest request, Practitioner practitioner, String id, String date) {

        SimpleDateFormat sdt = new SimpleDateFormat("yyyy-MM-dd HH:mm");

        MedicationAdministration administration = new MedicationAdministration();
        administration.setId(fhirBundle.getNewId(administration));
        administration.addIdentifier().setSystem(interOpenMedicationAdministrationIdentifier).setValue(id);
        administration.setSubject(new Reference(uuidtag + patient.getId()));
        administration.setMedication(new Reference(uuidtag + medication.getId()));
        administration.setStatus(MedicationAdministration.MedicationAdministrationStatus.COMPLETED);
        administration.setContext(new Reference(uuidtag + encounter.getId()));
        try {
            administration.setEffective(new DateTimeType(sdt.parse(date)));
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        }
        administration.setPrescription(new Reference(uuidtag + request.getId()));
        administration.addPerformer().setActor(new Reference(uuidtag + practitioner.getId()));

        MedicationAdministration.MedicationAdministrationDosageComponent dosageComponent = administration.getDosage();

        dosageComponent.getRoute().addCoding()
                .setSystem(SNOMEDCT)
                .setCode("34206005")
                .setDisplay("Subcutaneous route");
        dosageComponent.setText("As directed");
      /*  dosageComponent.addAdditionalInstruction()
                .addCoding()
                .setSystem(SNOMEDCT)
                .setDisplay("Follow instructions")
                .setCode("421769005"); */
        // dosageComponent.setPatientInstruction("With evening meal");

        SimpleQuantity dose = new SimpleQuantity();
        dose.setUnit("pen").setValue(1).setCode("pen").setSystem(interOpenDosageUnitsNOS);
        dosageComponent.setDose(dose);

        return administration;
    }

    private MedicationRequest getMedicationRequest(Patient patient, Medication medication, Encounter encounter, Practitioner practitioner, String id, String date) {

        SimpleDateFormat sdt = new SimpleDateFormat("yyyy-MM-dd HH:mm");

        MedicationRequest request = new MedicationRequest();
        request.setId(fhirBundle.getNewId(request));
        request.setSubject(new Reference(uuidtag + patient.getId()));
        request.addIdentifier().setSystem(interOpenMedicationRequestIdentifier).setValue(id);
        request.setMedication(new Reference(uuidtag + medication.getId()));
        request.setContext(new Reference(uuidtag + encounter.getId()));
        request.setIntent(MedicationRequest.MedicationRequestIntent.ORDER);
        request.setStatus(MedicationRequest.MedicationRequestStatus.COMPLETED);
        try {
            request.setAuthoredOn(sdt.parse(date));
        } catch (Exception ex) {
        }
        request.getRequester().getAgent().setReference(uuidtag + practitioner.getId());


        return request;
    }

    private Encounter getEncounter(Patient patient, EpisodeOfCare episode, String encounterId, Encounter.EncounterStatus status, Organization provider
            , String classCode, String classDesc, String encStart, String encEnd,
                                   String typeCode, String typeDesc) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        SimpleDateFormat sdt = new SimpleDateFormat("yyyy-MM-dd HH:mm");
        Encounter encounter = new Encounter();

        encounter.addIdentifier()
                .setSystem(interOpenEncounterIdentifier)
                .setValue(encounterId);

        encounter.setId(fhirBundle.getNewId(encounter));
        encounter.setSubject(new Reference(uuidtag + patient.getId()));
        encounter.setStatus(status);
        if (episode != null) {
            encounter.addEpisodeOfCare().setReference(uuidtag + episode.getId());
        }
        encounter.setServiceProvider(new Reference(uuidtag + provider.getId()));
        encounter.getClass_()
                .setCode(classCode)
                .setSystem("http://hl7.org/fhir/v3/ActCode")
                .setDisplay(classDesc);
        try {
            encounter.getPeriod().setStart(sdt.parse(encStart));
        } catch (Exception ex) {
            try {
                encounter.getPeriod().setStart(sdf.parse(encStart));
            } catch (Exception ex2) {

            }
        }
        if (encEnd != null) {
            try {
                encounter.getPeriod().setEnd(sdt.parse(encEnd));
            } catch (Exception ex) {
                try {
                    encounter.getPeriod().setEnd(sdf.parse(encEnd));
                } catch (Exception ex1) {
                }
            }
        }
        CodeableConcept type = new CodeableConcept();
        type.addCoding().setSystem(SNOMEDCT).setDisplay(typeDesc).setCode(typeCode);
        encounter.getType().add(type);

        return encounter;
    }




    public void postOneEDITESTPATIENT() {
        String nhsNumber = "9999999468";
        System.out.println("Posting Patient NHS Number " + nhsNumber);

        SimpleDateFormat sd = new SimpleDateFormat("yyyy-MM-dd");

        Calendar cal = Calendar.getInstance();

        Date oneHourBack = cal.getTime();
        fhirBundle = new FhirBundleUtil(Bundle.BundleType.COLLECTION);

        doSetUp();


        Patient patient = new Patient();
        patient.setId(fhirBundle.getNewId(patient));
        patient.addIdentifier()
                .setSystem("https://fhir.nhs.uk/Id/nhs-number")
                .setValue(nhsNumber);
        patient.addName().setFamily("EDITESTPATIENT").addPrefix("Mr").addGiven("One").addGiven("John");
        try {
            patient.setBirthDate(sd.parse("1936-04-29"));
        } catch (Exception ex) {
            // Do nothing
        }


        Bundle bundle = new Bundle();

        bundle.addEntry().setResource(patient);

        bundle.addEntry().setResource(hdft);

        Practitioner kath = new Practitioner();
        kath.setId(fhirBundle.getNewId(kath));
        kath.addIdentifier().setValue("4516806").setSystem("https://fhir.nhs.uk/Id/sds-user-id");
        kath.addName().addPrefix("Dr.").addGiven("Katherine").setFamily("Lambert");

        bundle.addEntry().setResource(kath);

        Flag flag = new Flag();
        flag.setId(fhirBundle.getNewId(flag));
        flag.setSubject(new Reference(uuidtag + patient.getId()));
        flag.addIdentifier().setSystem(midYorksFlagIdentifier).setValue("one1");
        flag.setStatus(Flag.FlagStatus.ACTIVE);
        flag.getCode().addCoding()
                .setCode("450476008")
                .setSystem("http://snomed.info/sct")
                .setDisplay("Not for attempted cardiopulmonary resuscitation");
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        try {
            flag.getPeriod().setStart(sdf.parse("2019-01-29"));
        } catch (Exception ex) {
        }

        flag.setAuthor(new Reference(uuidtag + kath.getIdElement().getIdPart()));
        bundle.addEntry().setResource(flag);

        flag = new Flag();
        flag.setId(fhirBundle.getNewId(flag));
        flag.setSubject(new Reference(uuidtag + patient.getId()));
        flag.addIdentifier().setSystem(midYorksFlagIdentifier).setValue("two2");
        flag.setStatus(Flag.FlagStatus.ACTIVE);
        flag.getCode().addCoding()
                .setCode("526631000000108")
                .setSystem("http://snomed.info/sct")
                .setDisplay("On end of life care register (finding)");
        try {
            flag.getPeriod().setStart(sdf.parse("2019-01-29"));
        } catch (Exception ex) {
        }

        flag.setAuthor(new Reference(uuidtag + kath.getIdElement().getIdPart()));
        bundle.addEntry().setResource(flag);

        // Ignore persons involved with discussion.

        CareTeam careTeamH = new CareTeam();
        careTeamH.setId(fhirBundle.getNewId(careTeamH));
        careTeamH.setSubject(new Reference(uuidtag + patient.getId()));
        careTeamH.addIdentifier().setSystem(westRidingCareTeamIdentifier).setValue("hdftct");
        careTeamH.addParticipant().setMember(new Reference(uuidtag + kath.getId()));
        careTeamH.setName("HDFT – Palliative Care Team");

        bundle.addEntry().setResource(careTeamH);

        QuestionnaireResponse form = new QuestionnaireResponse();
        form.setId(fhirBundle.getNewId(form));
        form.setSubject(new Reference(uuidtag + patient.getId()));
        form.getIdentifier().setSystem(midYorksQuestionnaireResponseIdentifier).setValue("hdrjm1");
        form.setAuthor(new Reference(uuidtag + kath.getId()));
        // form.setQuestionnaire(new Reference(uuidtag + questionnaire.getId()));
        form.setStatus(QuestionnaireResponse.QuestionnaireResponseStatus.COMPLETED);
        try {
            form.setAuthored(sdf.parse("2019-01-12"));
        } catch (Exception ex) {
        }
        form.addItem()
                .setLinkId("preferredPlaceOfDeathText")
                .setText("Preferred Place Of Death Text")
                .addAnswer()
                .setValue(new CodeableConcept().addCoding().setCode("110481000000108").setSystem(SNOMEDCT).setDisplay("At home with family"));
        form.addItem()
                .setLinkId("preferencesAndWishes")
                .setText("Preferences and Wishes")
                .addAnswer()
                .setValue(new StringType("Family would like to support him to die at home if possible. Hospice admission would be alternative"));
        bundle.addEntry().setResource(form);


        CarePlan carePlan = new CarePlan();
        carePlan.setId(fhirBundle.getNewId(carePlan));
        carePlan.setSubject(new Reference(uuidtag + patient.getId()));
        carePlan.addIdentifier().setSystem(midYorksCarePlanIdentifier).setValue("hdftblm1");

        carePlan.addAuthor(new Reference(uuidtag + kath.getId()));
        carePlan.addCareTeam(new Reference(uuidtag + careTeamH.getId()));

        carePlan.addCategory().addCoding()
                .setCode("736373009")
                .setSystem("http://snomed.info/sct")
                .setDisplay("End of life care plan");
       // carePlan.setStatus(CarePlan.CarePlanStatus.ACTIVE);
        carePlan.setIntent(CarePlan.CarePlanIntent.PLAN);
        try {
            carePlan.getPeriod().setStart(sdf.parse("2019-01-12"));
        } catch (Exception ex) {
        }
        carePlan.addSupportingInfo(new Reference(uuidtag + form.getId()));
        // carePlan.addSupportingInfo(new Reference(uuidtag + formCPR.getId()));
        // carePlan.addSupportingInfo(new Reference(uuidtag + formLPA.getId()));
        // carePlan.addSupportingInfo(new Reference(uuidtag + prognosis.getId()));
        carePlan.addActivity()
                .getDetail().setStatus(CarePlan.CarePlanActivityStatus.NOTSTARTED).setDescription("ACP decisions have been made without involving the patient as they lack mental capacity (in their best interests). Wife keen to avoid hospital admissions if possible as these can be distressing but if felt that this would make a significant difference to symptom management or comfort then would consider this.");
        carePlan.addActivity()
                .getDetail().setStatus(CarePlan.CarePlanActivityStatus.NOTSTARTED).setDescription("This patient is known to the Harrogate Palliative Care Team. If advice needed Monday-Friday 08.30-17.00 contact the team on 01423 553464. Outside these hours contact Saint Michael's Hospice (Harrogate) on 01423 872658. At risk of spinal cord compression due to metastatic disease in spine. Watch for changes in sensation or mobility. May need to consider high dose steroids and investigation (MRI). Wife has been provided with information leaflet around signs and symptoms of SCC.");

        bundle.addEntry().setResource(carePlan);

        Questionnaire questionnaire = getEOLCQuestionnaire();

        System.out.println(ctxFHIR.newXmlParser().setPrettyPrint(true).encodeResourceToString(questionnaire));
        bundle.addEntry().setResource(questionnaire);

        fhirBundle.processBundleResources(bundle);

        System.out.println(ctxFHIR.newXmlParser().setPrettyPrint(true).encodeResourceToString(fhirBundle.getFhirDocument()));


        try {
            saveBundle(nhsNumber + ".xml", "patient", fhirBundle.getFhirDocument());
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        }
        MethodOutcome outcome = client.create().resource(fhirBundle.getFhirDocument()).execute();

    }


    private void addObsExtension(Questionnaire.QuestionnaireItemComponent obs, String profile) {
        obs.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedProfile")
                .setValue(new Reference(profile));
        obs.addExtension()
                .setUrl("http://hl7.org/fhir/StructureDefinition/questionnaire-allowedResource")
                .setValue(new CodeType().setValue("Observation"));

    }

}
