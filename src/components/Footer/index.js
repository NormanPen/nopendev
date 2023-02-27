import {useTranslation} from 'react-i18next';
import {useState} from 'react';
import {Link} from 'react-scroll';

import pfeil from '../../images/Pfeil.svg';

function Footer() {
    const {t} = useTranslation();
    const [DSGVOisOpen, DSGVOsetIsOpen] = useState(false);
    const DSGVOtoggle = () => DSGVOsetIsOpen(!DSGVOisOpen);
    const [ImprintIsOpen, ImprintSetIsOpen] = useState(false);
    const ImprintToggle = () => ImprintSetIsOpen(!ImprintIsOpen);

    return (
        <div className='grid  pt-8 bg-nope-grey-middle dark:bg-nope-grey  '>
            <div className='flex pl-6 pb-8'>
                <button
                    className='flex text-white dark:text-black'
                    onClick={ImprintToggle}
                >
                    {t('imprint')}
                    <img src={pfeil} alt='Pfeil' className='pt-1 pl-2 ' />
                </button>

                <Link
                    to='test'
                    className='flex pr-8 pl-6 text-white dark:text-black'
                    onClick={DSGVOtoggle}
                >
                    {t('privacy')}
                    <img src={pfeil} alt='Pfeil' className='pt-1 pl-2' />
                </Link>
            </div>

            <article
                className={ImprintIsOpen ? 'block' : 'hidden'}
                onClick={ImprintToggle}
            >
                <address className='text-white pt-9 pl-6'>
                    <a
                        className=''
                        href='https://www.google.com/maps/place/Horner+Weg+205,+22111+Hamburg/@53.555247,10.0745182,17z/data=!3m1!4b1!4m5!3m4!1s0x47b18c19de42fb6f:0x967465a135005944!8m2!3d53.555247!4d10.0767069'
                        target='blank'
                    >
                        Norman Pendzich
                        <br />
                        Horner Weg 205b
                        <br />
                        22111 Hamburg
                    </a>

                    <h3 className='mt-4'>Email:</h3>

                    <a href='mailto:normanpendzich@gmail.com'>
                        normanpendzich@gmail.com
                    </a>
                    <h3 className='mt-4'>Phone:</h3>
                    <a className='text-web-grau' href='tel:+4915161449132'>
                        +49 15161449132
                    </a>
                </address>
            </article>

            <article
                className={DSGVOisOpen ? 'inline-block' : 'hidden'}
                onClick={DSGVOtoggle}
            >
                <header>
                    <h1 className='Datenschutz text-white'>Datenschutz</h1>
                </header>
                <section className='text-white pl-6 pr-6 pb-6'>
                    <div className='test' />
                    <p>
                        Datenschutzerklärung Einleitung und Überblick Wir haben
                        diese Datenschutzerklärung (Fassung
                        23.01.2023-312396647) verfasst, um Ihnen gemäß der
                        Vorgaben der Datenschutz-Grundverordnung (EU) 2016/679
                        und anwendbaren nationalen Gesetzen zu erklären, welche
                        personenbezogenen Daten (kurz Daten) wir als
                        Verantwortliche – und die von uns beauftragten
                        Auftragsverarbeiter (z. B. Provider) – verarbeiten,
                        zukünftig verarbeiten werden und welche rechtmäßigen
                        Möglichkeiten Sie haben. Die verwendeten Begriffe sind
                        geschlechtsneutral zu verstehen. Kurz gesagt: Wir
                        informieren Sie umfassend über Daten, die wir über Sie
                        verarbeiten. Datenschutzerklärungen klingen für
                        gewöhnlich sehr technisch und verwenden juristische
                        Fachbegriffe. Diese Datenschutzerklärung soll Ihnen
                        hingegen die wichtigsten Dinge so einfach und
                        transparent wie möglich beschreiben. Soweit es der
                        Transparenz förderlich ist, werden technische Begriffe
                        leserfreundlich erklärt, Links zu weiterführenden
                        Informationen geboten und Grafiken zum Einsatz gebracht.
                        Wir informieren damit in klarer und einfacher Sprache,
                        dass wir im Rahmen unserer Geschäftstätigkeiten nur dann
                        personenbezogene Daten verarbeiten, wenn eine
                        entsprechende gesetzliche Grundlage gegeben ist. Das ist
                        sicher nicht möglich, wenn man möglichst knappe, unklare
                        und juristisch-technische Erklärungen abgibt, so wie sie
                        im Internet oft Standard sind, wenn es um Datenschutz
                        geht. Ich hoffe, Sie finden die folgenden Erläuterungen
                        interessant und informativ und vielleicht ist die eine
                        oder andere Information dabei, die Sie noch nicht
                        kannten. Wenn trotzdem Fragen bleiben, möchten wir Sie
                        bitten, sich an die unten bzw. im Impressum genannte
                        verantwortliche Stelle zu wenden, den vorhandenen Links
                        zu folgen und sich weitere Informationen auf Drittseiten
                        anzusehen. Unsere Kontaktdaten finden Sie
                        selbstverständlich auch im Impressum. Anwendungsbereich
                        Diese Datenschutzerklärung gilt für alle von uns im
                        Unternehmen verarbeiteten personenbezogenen Daten und
                        für alle personenbezogenen Daten, die von uns
                        beauftragte Firmen (Auftragsverarbeiter) verarbeiten.
                        Mit personenbezogenen Daten meinen wir Informationen im
                        Sinne des Art. 4 Nr. 1 DSGVO wie zum Beispiel Name,
                        E-Mail-Adresse und postalische Anschrift einer Person.
                        Die Verarbeitung personenbezogener Daten sorgt dafür,
                        dass wir unsere Dienstleistungen und Produkte anbieten
                        und abrechnen können, sei es online oder offline. Der
                        Anwendungsbereich dieser Datenschutzerklärung umfasst:
                        alle Onlineauftritte (Websites, Onlineshops), die wir
                        betreiben Social Media Auftritte und
                        E-Mail-Kommunikation mobile Apps für Smartphones und
                        andere Geräte Kurz gesagt: Die Datenschutzerklärung gilt
                        für alle Bereiche, in denen personenbezogene Daten im
                        Unternehmen über die genannten Kanäle strukturiert
                        verarbeitet werden. Sollten wir außerhalb dieser Kanäle
                        mit Ihnen in Rechtsbeziehungen eintreten, werden wir Sie
                        gegebenenfalls gesondert informieren. Rechtsgrundlagen
                        In der folgenden Datenschutzerklärung geben wir Ihnen
                        transparente Informationen zu den rechtlichen
                        Grundsätzen und Vorschriften, also den Rechtsgrundlagen
                        der Datenschutz-Grundverordnung, die uns ermöglichen,
                        personenbezogene Daten zu verarbeiten. Was das EU-Recht
                        betrifft, beziehen wir uns auf die VERORDNUNG (EU)
                        2016/679 DES EUROPÄISCHEN PARLAMENTS UND DES RATES vom
                        27. April 2016. Diese Datenschutz-Grundverordnung der EU
                        können Sie selbstverständlich online auf EUR-Lex, dem
                        Zugang zum EU-Recht, unter
                        https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679
                        nachlesen. Wir verarbeiten Ihre Daten nur, wenn
                        mindestens eine der folgenden Bedingungen zutrifft: 1.
                        Einwilligung (Artikel 6 Absatz 1 lit. a DSGVO): Sie
                        haben uns Ihre Einwilligung gegeben, Daten zu einem
                        bestimmten Zweck zu verarbeiten. Ein Beispiel wäre die
                        Speicherung Ihrer eingegebenen Daten eines
                        Kontaktformulars. 2. Vertrag (Artikel 6 Absatz 1 lit. b
                        DSGVO): Um einen Vertrag oder vorvertragliche
                        Verpflichtungen mit Ihnen zu erfüllen, verarbeiten wir
                        Ihre Daten. Wenn wir zum Beispiel einen Kaufvertrag mit
                        Ihnen abschließen, benötigen wir vorab personenbezogene
                        Informationen. 3. Rechtliche Verpflichtung (Artikel 6
                        Absatz 1 lit. c DSGVO): Wenn wir einer rechtlichen
                        Verpflichtung unterliegen, verarbeiten wir Ihre Daten.
                        Zum Beispiel sind wir gesetzlich verpflichtet Rechnungen
                        für die Buchhaltung aufzuheben. Diese enthalten in der
                        Regel personenbezogene Daten. 4. Berechtigte Interessen
                        (Artikel 6 Absatz 1 lit. f DSGVO): Im Falle berechtigter
                        Interessen, die Ihre Grundrechte nicht einschränken,
                        behalten wir uns die Verarbeitung personenbezogener
                        Daten vor. Wir müssen zum Beispiel gewisse Daten
                        verarbeiten, um unsere Website sicher und wirtschaftlich
                        effizient betreiben zu können. Diese Verarbeitung ist
                        somit ein berechtigtes Interesse. Weitere Bedingungen
                        wie die Wahrnehmung von Aufnahmen im öffentlichen
                        Interesse und Ausübung öffentlicher Gewalt sowie dem
                        Schutz lebenswichtiger Interessen treten bei uns in der
                        Regel nicht auf. Soweit eine solche Rechtsgrundlage doch
                        einschlägig sein sollte, wird diese an der
                        entsprechenden Stelle ausgewiesen. Zusätzlich zu der
                        EU-Verordnung gelten auch noch nationale Gesetze: In
                        Österreich ist dies das Bundesgesetz zum Schutz
                        natürlicher Personen bei der Verarbeitung
                        personenbezogener Daten (Datenschutzgesetz), kurz DSG.
                        In Deutschland gilt das Bundesdatenschutzgesetz, kurz
                        BDSG. Sofern weitere regionale oder nationale Gesetze
                        zur Anwendung kommen, informieren wir Sie in den
                        folgenden Abschnitten darüber. Kontaktdaten des
                        Verantwortlichen Sollten Sie Fragen zum Datenschutz oder
                        zur Verarbeitung personenbezogener Daten haben, finden
                        Sie nachfolgend die Kontaktdaten der verantwortlichen
                        Person bzw. Stelle: Norman Pendzich Horner Weg 205b,
                        221111 Hamburg, Deutschland Vertretungsberechtigt:
                        Norman Pendzich E-Mail: norman.pendzich@outlook.de
                        Telefon: +49 151 61449132 Impressum:
                        https://www.normanpendzich.dev/impressum/ Speicherdauer
                        Dass wir personenbezogene Daten nur so lange speichern,
                        wie es für die Bereitstellung unserer Dienstleistungen
                        und Produkte unbedingt notwendig ist, gilt als
                        generelles Kriterium bei uns. Das bedeutet, dass wir
                        personenbezogene Daten löschen, sobald der Grund für die
                        Datenverarbeitung nicht mehr vorhanden ist. In einigen
                        Fällen sind wir gesetzlich dazu verpflichtet, bestimmte
                        Daten auch nach Wegfall des ursprüngliches Zwecks zu
                        speichern, zum Beispiel zu Zwecken der Buchführung.
                        Sollten Sie die Löschung Ihrer Daten wünschen oder die
                        Einwilligung zur Datenverarbeitung widerrufen, werden
                        die Daten so rasch wie möglich und soweit keine Pflicht
                        zur Speicherung besteht, gelöscht. Über die konkrete
                        Dauer der jeweiligen Datenverarbeitung informieren wir
                        Sie weiter unten, sofern wir weitere Informationen dazu
                        haben. Rechte laut Datenschutz-Grundverordnung Gemäß
                        Artikel 13, 14 DSGVO informieren wir Sie über die
                        folgenden Rechte, die Ihnen zustehen, damit es zu einer
                        fairen und transparenten Verarbeitung von Daten kommt:
                        Sie haben laut Artikel 15 DSGVO ein Auskunftsrecht
                        darüber, ob wir Daten von Ihnen verarbeiten. Sollte das
                        zutreffen, haben Sie Recht darauf eine Kopie der Daten
                        zu erhalten und die folgenden Informationen zu erfahren:
                        zu welchem Zweck wir die Verarbeitung durchführen; die
                        Kategorien, also die Arten von Daten, die verarbeitet
                        werden; wer diese Daten erhält und wenn die Daten an
                        Drittländer übermittelt werden, wie die Sicherheit
                        garantiert werden kann; wie lange die Daten gespeichert
                        werden; das Bestehen des Rechts auf Berichtigung,
                        Löschung oder Einschränkung der Verarbeitung und dem
                        Widerspruchsrecht gegen die Verarbeitung; dass Sie sich
                        bei einer Aufsichtsbehörde beschweren können (Links zu
                        diesen Behörden finden Sie weiter unten); die Herkunft
                        der Daten, wenn wir sie nicht bei Ihnen erhoben haben;
                        ob Profiling durchgeführt wird, ob also Daten
                        automatisch ausgewertet werden, um zu einem persönlichen
                        Profil von Ihnen zu gelangen. Sie haben laut Artikel 16
                        DSGVO ein Recht auf Berichtigung der Daten, was
                        bedeutet, dass wir Daten richtig stellen müssen, falls
                        Sie Fehler finden. Sie haben laut Artikel 17 DSGVO das
                        Recht auf Löschung („Recht auf Vergessenwerden“), was
                        konkret bedeutet, dass Sie die Löschung Ihrer Daten
                        verlangen dürfen. Sie haben laut Artikel 18 DSGVO das
                        Recht auf Einschränkung der Verarbeitung, was bedeutet,
                        dass wir die Daten nur mehr speichern dürfen aber nicht
                        weiter verwenden. Sie haben laut Artikel 20 DSGVO das
                        Recht auf Datenübertragbarkeit, was bedeutet, dass wir
                        Ihnen auf Anfrage Ihre Daten in einem gängigen Format
                        zur Verfügung stellen. Sie haben laut Artikel 21 DSGVO
                        ein Widerspruchsrecht, welches nach Durchsetzung eine
                        Änderung der Verarbeitung mit sich bringt. Wenn die
                        Verarbeitung Ihrer Daten auf Artikel 6 Abs. 1 lit. e
                        (öffentliches Interesse, Ausübung öffentlicher Gewalt)
                        oder Artikel 6 Abs. 1 lit. f (berechtigtes Interesse)
                        basiert, können Sie gegen die Verarbeitung Widerspruch
                        einlegen. Wir prüfen danach so rasch wie möglich, ob wir
                        diesem Widerspruch rechtlich nachkommen können. Werden
                        Daten verwendet, um Direktwerbung zu betreiben, können
                        Sie jederzeit gegen diese Art der Datenverarbeitung
                        widersprechen. Wir dürfen Ihre Daten danach nicht mehr
                        für Direktmarketing verwenden. Werden Daten verwendet,
                        um Profiling zu betreiben, können Sie jederzeit gegen
                        diese Art der Datenverarbeitung widersprechen. Wir
                        dürfen Ihre Daten danach nicht mehr für Profiling
                        verwenden. Sie haben laut Artikel 22 DSGVO unter
                        Umständen das Recht, nicht einer ausschließlich auf
                        einer automatisierten Verarbeitung (zum Beispiel
                        Profiling) beruhenden Entscheidung unterworfen zu
                        werden. Sie haben laut Artikel 77 DSGVO das Recht auf
                        Beschwerde. Das heißt, Sie können sich jederzeit bei der
                        Datenschutzbehörde beschweren, wenn Sie der Meinung
                        sind, dass die Datenverarbeitung von personenbezogenen
                        Daten gegen die DSGVO verstößt. Kurz gesagt: Sie haben
                        Rechte – zögern Sie nicht, die oben gelistete
                        verantwortliche Stelle bei uns zu kontaktieren! Wenn Sie
                        glauben, dass die Verarbeitung Ihrer Daten gegen das
                        Datenschutzrecht verstößt oder Ihre
                        datenschutzrechtlichen Ansprüche in sonst einer Weise
                        verletzt worden sind, können Sie sich bei der
                        Aufsichtsbehörde beschweren. Diese ist für Österreich
                        die Datenschutzbehörde, deren Website Sie unter
                        https://www.dsb.gv.at/ finden. In Deutschland gibt es
                        für jedes Bundesland einen Datenschutzbeauftragten. Für
                        nähere Informationen können Sie sich an die
                        Bundesbeauftragte für den Datenschutz und die
                        Informationsfreiheit (BfDI) wenden. Für unser
                        Unternehmen ist die folgende lokale Datenschutzbehörde
                        zuständig: Hamburg Datenschutzbehörde Landesbeauftragter
                        für Datenschutz: Prof. Dr. Johannes Caspar Adresse:
                        Ludwig-Erhard-Str. 22 7.OG, 20459 Hamburg Telefonnr.:
                        040/428 54-40 40 E-Mail-Adresse:
                        mailbox@datenschutz.hamburg.de Website:
                        https://datenschutz-hamburg.de/ Webhosting Einleitung
                        Webhosting Zusammenfassung 👥 Betroffene: Besucher der
                        Website 🤝 Zweck: professionelles Hosting der Website
                        und Absicherung des Betriebs 📓 Verarbeitete Daten:
                        IP-Adresse, Zeitpunkt des Websitebesuchs, verwendeter
                        Browser und weitere Daten. Mehr Details dazu finden Sie
                        weiter unten bzw. beim jeweils eingesetzten Webhosting
                        Provider. 📅 Speicherdauer: abhängig vom jeweiligen
                        Provider, aber in der Regel 2 Wochen ⚖️
                        Rechtsgrundlagen: Art. 6 Abs. 1 lit.f DSGVO (Berechtigte
                        Interessen) Was ist Webhosting? Wenn Sie heutzutage
                        Websites besuchen, werden gewisse Informationen – auch
                        personenbezogene Daten – automatisch erstellt und
                        gespeichert, so auch auf dieser Website. Diese Daten
                        sollten möglichst sparsam und nur mit Begründung
                        verarbeitet werden. Mit Website meinen wir übrigens die
                        Gesamtheit aller Webseiten auf einer Domain, d.h. alles
                        von der Startseite (Homepage) bis hin zur aller letzten
                        Unterseite (wie dieser hier). Mit Domain meinen wir zum
                        Beispiel beispiel.de oder musterbeispiel.com. Wenn Sie
                        eine Website auf einem Computer, Tablet oder Smartphone
                        ansehen möchten, verwenden Sie dafür ein Programm, das
                        sich Webbrowser nennt. Sie kennen vermutlich einige
                        Webbrowser beim Namen: Google Chrome, Microsoft Edge,
                        Mozilla Firefox und Apple Safari. Wir sagen kurz Browser
                        oder Webbrowser dazu. Um die Website anzuzeigen, muss
                        sich der Browser zu einem anderen Computer verbinden, wo
                        der Code der Website gespeichert ist: dem Webserver. Der
                        Betrieb eines Webservers ist eine komplizierte und
                        aufwendige Aufgabe, weswegen dies in der Regel von
                        professionellen Anbietern, den Providern, übernommen
                        wird. Diese bieten Webhosting an und sorgen damit für
                        eine verlässliche und fehlerfreie Speicherung der Daten
                        von Websites. Eine ganze Menge Fachbegriffe, aber bitte
                        bleiben Sie dran, es wird noch besser! Bei der
                        Verbindungsaufnahme des Browsers auf Ihrem Computer
                        (Desktop, Laptop, Tablet oder Smartphone) und während
                        der Datenübertragung zu und vom Webserver kann es zu
                        einer Verarbeitung personenbezogener Daten kommen.
                        Einerseits speichert Ihr Computer Daten, andererseits
                        muss auch der Webserver Daten eine Zeit lang speichern,
                        um einen ordentlichen Betrieb zu gewährleisten. Ein Bild
                        sagt mehr als tausend Worte, daher zeigt folgende Grafik
                        zur Veranschaulichung das Zusammenspiel zwischen
                        Browser, dem Internet und dem Hosting-Provider. Warum
                        verarbeiten wir personenbezogene Daten? Die Zwecke der
                        Datenverarbeitung sind: 1. Professionelles Hosting der
                        Website und Absicherung des Betriebs 2. zur
                        Aufrechterhaltung der Betriebs- und IT-Sicherheit 3.
                        Anonyme Auswertung des Zugriffsverhaltens zur
                        Verbesserung unseres Angebots und ggf. zur
                        Strafverfolgung bzw. Verfolgung von Ansprüchen Welche
                        Daten werden verarbeitet? Auch während Sie unsere
                        Website jetzt gerade besuchen, speichert unser
                        Webserver, das ist der Computer auf dem diese Webseite
                        gespeichert ist, in der Regel automatisch Daten wie die
                        komplette Internetadresse (URL) der aufgerufenen
                        Webseite Browser und Browserversion (z. B. Chrome 87)
                        das verwendete Betriebssystem (z. B. Windows 10) die
                        Adresse (URL) der zuvor besuchten Seite (Referrer URL)
                        (z. B.
                        https://www.beispielquellsite.de/vondabinichgekommen/)
                        den Hostnamen und die IP-Adresse des Geräts von welchem
                        aus zugegriffen wird (z. B. COMPUTERNAME und
                        194.23.43.121) Datum und Uhrzeit in Dateien, den
                        sogenannten Webserver-Logfiles Wie lange werden Daten
                        gespeichert? In der Regel werden die oben genannten
                        Daten zwei Wochen gespeichert und danach automatisch
                        gelöscht. Wir geben diese Daten nicht weiter, können
                        jedoch nicht ausschließen, dass diese Daten beim
                        Vorliegen von rechtswidrigem Verhalten von Behörden
                        eingesehen werden. Kurz gesagt: Ihr Besuch wird durch
                        unseren Provider (Firma, die unsere Website auf
                        speziellen Computern (Servern) laufen lässt),
                        protokolliert, aber wir geben Ihre Daten nicht ohne
                        Zustimmung weiter! Rechtsgrundlage Die Rechtmäßigkeit
                        der Verarbeitung personenbezogener Daten im Rahmen des
                        Webhosting ergibt sich aus Art. 6 Abs. 1 lit. f DSGVO
                        (Wahrung der berechtigten Interessen), denn die Nutzung
                        von professionellem Hosting bei einem Provider ist
                        notwendig, um das Unternehmen im Internet sicher und
                        nutzerfreundlich präsentieren und Angriffe und
                        Forderungen hieraus gegebenenfalls verfolgen zu können.
                        Zwischen uns und dem Hosting-Provider besteht in der
                        Regel ein Vertrag über die Auftragsverarbeitung gemäß
                        Art. 28 f. DSGVO, der die Einhaltung von Datenschutz
                        gewährleistet und Datensicherheit garantiert. GitHub
                        Pages Datenschutzerklärung Wir verwenden für unsere
                        Website den Webhosting-Dienst GitHub Pages.
                        Dienstanbieter ist das amerikanische Unternehmen GitHub
                        Inc., 88 Colin P. Kelly Jr. St.,San Francisco, CA 94107,
                        USA. GitHub verarbeitet Daten von Ihnen u.a. auch in den
                        USA. Wir weisen darauf hin, dass nach Meinung des
                        Europäischen Gerichtshofs derzeit kein angemessenes
                        Schutzniveau für den Datentransfer in die USA besteht.
                        Dies kann mit verschiedenen Risiken für die
                        Rechtmäßigkeit und Sicherheit der Datenverarbeitung
                        einhergehen. Als Grundlage der Datenverarbeitung bei
                        Empfängern mit Sitz in Drittstaaten (außerhalb der
                        Europäischen Union, Island, Liechtenstein, Norwegen,
                        also insbesondere in den USA) oder einer Datenweitergabe
                        dorthin verwendet GitHub sogenannte
                        Standardvertragsklauseln (= Art. 46. Abs. 2 und 3
                        DSGVO). Standardvertragsklauseln (Standard Contractual
                        Clauses – SCC) sind von der EU-Kommission
                        bereitgestellte Mustervorlagen und sollen sicherstellen,
                        dass Ihre Daten auch dann den europäischen
                        Datenschutzstandards entsprechen, wenn diese in
                        Drittländer (wie beispielsweise in die USA) überliefert
                        und dort gespeichert werden. Durch diese Klauseln
                        verpflichtet sich GitHub, bei der Verarbeitung Ihrer
                        relevanten Daten, das europäische Datenschutzniveau
                        einzuhalten, selbst wenn die Daten in den USA
                        gespeichert, verarbeitet und verwaltet werden. Diese
                        Klauseln basieren auf einem Durchführungsbeschluss der
                        EU-Kommission. Sie finden den Beschluss und die
                        entsprechenden Standardvertragsklauseln u.a. hier:
                        https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de
                        Die GitHub Datenverarbeitungsbedingungen (Processing
                        Terms), welche den Standardvertragsklauseln entsprechen,
                        finden Sie unter
                        https://docs.github.com/en/site-policy/privacy-policies/github-data-protection-agreement.
                        Mehr über die Daten, die durch die Verwendung von GitHub
                        verarbeitet werden, erfahren Sie in der Privacy Policy
                        auf
                        https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement.
                        Messenger & Kommunikation Einleitung Messenger &
                        Kommunikation Datenschutzerklärung Zusammenfassung 👥
                        Betroffene: Besucher der Website 🤝 Zweck:
                        Kontaktanfragen und die allgemeine Kommunikation
                        zwischen uns und Ihnen 📓 Verarbeitete Daten: Daten wie
                        etwa Name, Adresse, E-Mailadresse, Telefonnummer,
                        allgemeine Inhaltsdaten, gegebenenfalls IP-Adresse Mehr
                        Details dazu finden Sie bei den jeweils eingesetzten
                        Tools. 📅 Speicherdauer: abhängig von den verwendeten
                        Messenger- & Kommunikationsfunktionen ⚖️
                        Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO
                        (Einwilligung), Art. 6 Abs. 1 lit. f DSGVO (Berechtigte
                        Interessen), Art. 6 Abs. 1 S. 1 lit. b. DSGVO
                        (vertragliche oder vorvertragliche Verpflichtungen) Was
                        sind Messenger- & Kommunikationsfunktionen? Wir bieten
                        auf unserer Website verschiedene Möglichkeiten (etwa
                        Messenger- und Chatfunktionen, Online- bzw.
                        Kontaktformulare, E-Mail, Telefon), um mit uns zu
                        kommunizieren. Dabei werden auch Ihre Daten, soweit es
                        für die Beantwortung Ihrer Anfrage und unseren
                        darauffolgenden Maßnahmen nötig ist, verarbeitet und
                        gespeichert. Wir nutzen neben klassischen
                        Kommunikationsmitteln wie E-Mail, Kontaktformularen oder
                        Telefon auch Chats bzw. Messenger. Die derzeit am
                        häufigsten verwendete Messenger-Funktion ist WhatsApp,
                        aber es gibt natürlich speziell für Websites viele
                        verschiedene Anbieter, die Messenger-Funktionen
                        anbieten. Wenn Inhalte Ende zu Ende verschlüsselt sind,
                        wird darauf in den einzelnen Datenschutztexten oder in
                        der Datenschutzerklärung des jeweiligen Anbieters
                        hingewiesen. Eine Ende-zu-Ende-Verschlüsselung bedeutet
                        nichts anders, als dass Inhalte einer Nachricht selbst
                        für den Anbieter nicht sichtbar sind. Allerdings können
                        trotzdem Informationen zu Ihrem Gerät,
                        Standorteinstellungen und andere technische Daten
                        verarbeitet und gespeichert werden. Warum nutzen wir
                        Messenger- & Kommunikationsfunktionen?
                        Kommunikationsmöglichkeiten mit Ihnen sind für uns von
                        großer Bedeutung. Schließlich wollen wir mit Ihnen
                        sprechen und alle möglichen Fragen zu unserem Service
                        bestmöglich beantworten. Eine gut funktionierende
                        Kommunikation ist bei uns ein wichtiger Teil unserer
                        Dienstleistung. Mit den praktischen Messenger- &
                        Kommunikationsfunktionen können Sie jederzeit jene
                        wählen, die Ihnen am liebsten sind. In Ausnahmefällen
                        kann es aber auch vorkommen, dass wir bestimmte Fragen
                        über Chat bzw. Messenger nicht beantworten. Das ist der
                        Fall, wenn es etwa um interne vertragliche
                        Angelegenheiten geht. Hier empfehlen wir andere
                        Kommunikationsmöglichkeiten wie E-Mail oder Telefon. Wir
                        gehen in der Regel davon aus, dass wir
                        datenschutzrechtlich verantwortlich bleiben, auch wenn
                        wir Dienste einer Social-Media-Plattform nutzen. Der
                        Europäische Gerichtshof hat jedoch entschieden, dass in
                        bestimmten Fällen der Betreiber der
                        Social-Media-Plattform zusammen mit uns gemeinsam
                        verantwortlich im Sinne des Art. 26 DSGVO sein kann.
                        Soweit dies der Fall ist, weisen wir gesondert darauf
                        hin und arbeiten auf Grundlage einer diesbezüglichen
                        Vereinbarung. Das Wesentliche der Vereinbarung ist
                        weiter unten bei der betroffenen Plattform
                        wiedergegeben. Bitte beachten Sie, dass bei der Nutzung
                        unserer eingebauten Elemente auch Daten von Ihnen
                        außerhalb der Europäischen Union verarbeitet werden
                        können, da viele Anbieter, beispielsweise
                        Facebook-Messenger oder WhatsApp amerikanische
                        Unternehmen sind. Dadurch können Sie möglicherweise Ihre
                        Rechte in Bezug auf Ihre personenbezogenen Daten nicht
                        mehr so leicht einfordern bzw. durchsetzen. Welche Daten
                        werden verarbeitet? Welche Daten genau gespeichert und
                        verarbeitet werden, hängt vom jeweiligen Anbieter der
                        Messenger- & Kommunikationsfunktionen ab. Grundsätzlich
                        handelt es sich um Daten wie etwa Name, Adresse,
                        Telefonnummer, E-Mailadresse und Inhaltsdaten wie
                        beispielsweise alle Informationen, die Sie in ein
                        Kontaktformular eingeben. Meistens werden auch
                        Informationen zu Ihrem Gerät und die IP-Adresse
                        gespeichert. Daten, die über eine Messenger- &
                        Kommunikationsfunktion erhoben werden, werden auch auf
                        den Servern der Anbieter gespeichert. Wenn Sie genau
                        wissen wollen, welche Daten bei den jeweiligen Anbietern
                        gespeichert und verarbeitet werden und wie Sie der
                        Datenverarbeitung widersprechen können, sollten Sie die
                        jeweilige Datenschutzerklärung des Unternehmens
                        sorgfältig durchlesen. Wie lange werden Daten
                        gespeichert? Wie lange die Daten verarbeitet und
                        gespeichert werden, hängt in erster Linie von unseren
                        verwendeten Tools ab. Weiter unten erfahren Sie mehr
                        über die Datenverarbeitung der einzelnen Tools. In den
                        Datenschutzerklärungen der Anbieter steht üblicherweise
                        genau, welche Daten wie lange gespeichert und
                        verarbeitet werden. Grundsätzlich werden
                        personenbezogene Daten nur so lange verarbeitet, wie es
                        für die Bereitstellung unserer Dienste nötig ist. Wenn
                        Daten in Cookies gespeichert werden, variiert die
                        Speicherdauer stark. Die Daten können gleich nach dem
                        Verlassen einer Website wieder gelöscht werden, sie
                        können aber auch über mehrere Jahre gespeichert bleiben.
                        Daher sollten Sie sich jedes einzelnen Cookie im Detail
                        ansehen, wenn Sie über die Datenspeicherung Genaueres
                        wissen wollen. Meistens finden Sie in den
                        Datenschutzerklärungen der einzelnen Anbieter auch
                        aufschlussreiche Informationen über die einzelnen
                        Cookies. Widerspruchsrecht Sie haben auch jederzeit das
                        Recht und die Möglichkeit Ihre Einwilligung zur
                        Verwendung von Cookies bzw. Drittanbietern zu
                        widerrufen. Das funktioniert entweder über unser
                        Cookie-Management-Tool oder über andere
                        Opt-Out-Funktionen. Zum Bespiel können Sie auch die
                        Datenerfassung durch Cookies verhindern, indem Sie in
                        Ihrem Browser die Cookies verwalten, deaktivieren oder
                        löschen. Für weitere Informationen verweisen wir auf den
                        Abschnitt zur Einwilligung. Da bei Messenger- &
                        Kommunikationsfunktionen Cookies zum Einsatz kommen
                        können, empfehlen wir Ihnen auch unsere allgemeine
                        Datenschutzerklärung über Cookies. Um zu erfahren,
                        welche Daten von Ihnen genau gespeichert und verarbeitet
                        werden, sollten Sie die Datenschutzerklärungen der
                        jeweiligen Tools durchlesen. Rechtsgrundlage Wenn Sie
                        eingewilligt haben, dass Daten von Ihnen durch
                        eingebundene Messenger- & Kommunikationsfunktionen
                        verarbeitet und gespeichert werden können, gilt diese
                        Einwilligung als Rechtsgrundlage der Datenverarbeitung
                        (Art. 6 Abs. 1 lit. a DSGVO). Wir bearbeiten Ihre
                        Anfrage und verwalten Ihre Daten im Rahmen vertraglicher
                        oder vorvertraglicher Beziehungen, um unsere
                        vorvertraglichen und vertraglichen Pflichten zu erfüllen
                        bzw. Anfragen zu beantworten. Grundlage dafür ist Art. 6
                        Abs. 1 S. 1 lit. b. DSGVO. Grundsätzlich werden Ihre
                        Daten bei Vorliegen einer Einwilligung auch auf
                        Grundlage unseres berechtigten Interesses (Art. 6 Abs. 1
                        lit. f DSGVO) an einer schnellen und guten Kommunikation
                        mit Ihnen oder anderen Kunden und Geschäftspartnern
                        gespeichert und verarbeitet. WhatsApp
                        Datenschutzerklärung Wir verwenden auf unserer Website
                        den Instant-Messaging-Dienst WhatsApp. Dienstanbieter
                        ist das amerikanische Unternehmen WhatsApp Inc. ein
                        Tochterunternehmen von Meta Platforms Inc. Für den
                        europäischen Raum ist das Unternehmen WhatsApp Ireland
                        Limited, 4 Grand Canal Square, Grand Canal Harbour,
                        Dublin 2, Irland verantwortlich. WhatsApp verarbeitet
                        Daten von Ihnen u.a. auch in den USA. Wir weisen darauf
                        hin, dass nach Meinung des Europäischen Gerichtshofs
                        derzeit kein angemessenes Schutzniveau für den
                        Datentransfer in die USA besteht. Dies kann mit
                        verschiedenen Risiken für die Rechtmäßigkeit und
                        Sicherheit der Datenverarbeitung einhergehen. Als
                        Grundlage der Datenverarbeitung bei Empfängern mit Sitz
                        in Drittstaaten (außerhalb der Europäischen Union,
                        Island, Liechtenstein, Norwegen, also insbesondere in
                        den USA) oder einer Datenweitergabe dorthin verwendet
                        WhatsApp sogenannte Standardvertragsklauseln (= Art. 46.
                        Abs. 2 und 3 DSGVO). Standardvertragsklauseln (Standard
                        Contractual Clauses – SCC) sind von der EU-Kommission
                        bereitgestellte Mustervorlagen und sollen sicherstellen,
                        dass Ihre Daten auch dann den europäischen
                        Datenschutzstandards entsprechen, wenn diese in
                        Drittländer (wie beispielsweise in die USA) überliefert
                        und dort gespeichert werden. Durch diese Klauseln
                        verpflichtet sich WhatsApp, bei der Verarbeitung Ihrer
                        relevanten Daten, das europäische Datenschutzniveau
                        einzuhalten, selbst wenn die Daten in den USA
                        gespeichert, verarbeitet und verwaltet werden. Diese
                        Klauseln basieren auf einem Durchführungsbeschluss der
                        EU-Kommission. Sie finden den Beschluss und die
                        entsprechenden Standardvertragsklauseln u.a. hier:
                        https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de
                        Informationen zur Datenübermittlung bei WhatsApp, welche
                        den Standardvertragsklauseln entsprechen, finden Sie
                        unter
                        https://www.whatsapp.com/legal/business-data-transfer-addendum-20210927
                        Mehr über die Daten, die durch die Verwendung von
                        WhatsApp verarbeitet werden, erfahren Sie in der Privacy
                        Policy auf https://www.whatsapp.com/privacy Recruiting
                        Tools Einleitung Recruiting Tools Datenschutzerklärung
                        Zusammenfassung 👥 Betroffene: Nutzer, die ein
                        Bewerbungsverfahren online abwickeln bzw. ein Recruiting
                        Tool verwenden 🤝 Zweck: Abwicklung eines
                        Bewerbungsverfahrens 📓 Verarbeitete Daten: Daten wie
                        etwa Name, Adresse, Kontaktdaten, E-Mail-Adresse oder
                        Ihre Telefonnummer. Mehr Details dazu finden Sie beim
                        jeweils eingesetzten Recruiting Tool. 📅 Speicherdauer:
                        bei erfolgreicher Bewerbung bis zum Ende des
                        Dienstverhältnisses. Anderenfalls werden die Daten nach
                        dem Bewerbungsverfahren gelöscht. ⚖️ Rechtsgrundlagen:
                        Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs 1
                        lit. b DSGVO (Vertrag), Art. 9 Abs. 2 lit. a. DSGVO
                        (Verarbeitung besonderer Kategorien) Was sind Recruiting
                        Tools? Verschiedene Unternehmen bieten
                        Softwareprogramme, die ein Bewerbungsverfahren deutlich
                        erleichtern können. Die meisten Systeme bieten etwa
                        Filteroptionen, um Datenbanken von potenziellen
                        Kandidaten zu durchforsten. So können wir schnell und
                        effizient Mitarbeiter finden, die zu unserem Unternehmen
                        passen. Sowohl über Onlineformulare als auch über
                        Recruiting Tools werden personenbezogene Daten von Ihnen
                        übertragen, gespeichert und verwaltet. In diesem
                        allgemeinen Text beziehen wir uns neben Recruiting Tools
                        auch auf das klassische Bewerbungsverfahren per E-Mail
                        bzw. Online-Formular. Genauere Informationen zu den
                        Recruiting Tools finden Sie in den
                        Datenschutzerklärungen der jeweiligen Anbieter. Warum
                        verwenden wir Recruiting Tools? Für die Suche nach
                        passenden Bewerbern und für die Administration aller
                        Bewerbungsunterlagen nutzen wir, unter Berücksichtigung
                        aller gesetzlichen Richtlinien, Softwareprogramme und
                        Plattformen, die sich auf das Bewerbungsmanagement
                        spezialisiert haben. Sogenannte Recruiting Tools
                        erleichtern in der Regel das Bewerbungsverfahren, indem
                        die Software viele administrative Tätigkeiten übernimmt
                        und Prozesse im Bewerbungsverfahren optimiert. Dadurch
                        können wir in manchen Fällen schneller geeignete
                        Mitarbeiter für unser Unternehmen finden. Für die
                        Bedingungen der Recruitingverfahren verweisen wir im
                        Einzelnen auf die jeweiligen Stellenausschreibungen.
                        Welche Daten werden verarbeitet? Wenn Sie sich bei uns
                        bewerben, müssen Sie uns natürlich auch Daten von Ihnen
                        zur Verfügung stellen, damit wir die Bewerbung auch
                        entsprechend beurteilen können. Welche Informationen Sie
                        uns genau mitteilen, hängt von der Stellenausschreibung
                        bzw. von den erforderlichen Angaben im Online-Formular
                        ab. In der Regel geht es dabei um Daten wie Name,
                        Adresse, Geburtsdatum und dem Nachweis Ihrer für den Job
                        notwendigen Qualifikation. Während des Prozesses einer
                        Bewerbung können aber nicht nur die üblichen
                        personenbezogenen Daten, wie etwa Name oder Adresse
                        übermittelt werden, sondern auch Informationen zu Ihrer
                        Gesundheit oder Ihrer ethnischen Herkunft angefragt
                        werden, damit wir und Sie die Rechte in Bezug auf
                        Arbeitsrecht, sozialer Sicherheit und Sozialschutz
                        ausüben können und gleichzeitig den dazu entsprechenden
                        Pflichten nachkommen können. Diese Daten werden Daten
                        besonderer Kategorie genannt. Über das Online-Formular
                        werden die Daten bzw. Ihre Bewerbung verschlüsselt an
                        uns gesendet. Sie können Ihre Bewerbung alternativ auch
                        per E-Mail zu uns schicken. Wenn Sie sich für diese
                        Variante entscheiden, werden die Daten zwar
                        verschlüsselt übertragen, aber vom abgesendeten und
                        empfangenen Server nicht verschlüsselt gespeichert.
                        Dauer der Datenverarbeitung Die von Ihnen übermittelten
                        Daten können von uns, im Falle einer erfolgreichen
                        Bewerbung, für ein Beschäftigungsverhältnis
                        weiterverarbeitet werden. Wenn die Bewerbung den
                        Vorstellungen nicht entspricht, löschen wir die
                        erhaltenen Daten. Auch wenn Sie Ihre Bewerbung
                        zurückziehen, werden diese Daten gelöscht. Sofern Sie
                        einer Aufnahme in unseren Bewerberpool zustimmen,
                        speichern wir Ihre in diesem Rahmen erhobenen Daten bis
                        zu ihrem Austritt aus dem Bewerberpool. Für den Austritt
                        gelten dieselben Regeln wie für den Widerruf Ihrer
                        Einwilligung. Widerspruchsrecht Sie haben auch immer das
                        Recht und die Möglichkeit Ihre Einwilligung zu
                        widerrufen. Damit wir noch mögliche Fragen zur Bewerbung
                        beantworten können und unseren Nachweispflichten
                        nachkommen können, werden die Daten spätestens nach 6
                        Monaten gelöscht. Rechnungen zu möglichen
                        Reisekostenerstattung archivieren wir aufgrund
                        steuerrechtlicher Vorgaben. Rechtsgrundlage Wenn wir Sie
                        in unser Bewerbungspool aufnehmen, passiert das auf der
                        Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a
                        DSGVO). Wir weisen Sie darauf hin, dass Ihre Zustimmung
                        in unser Bewerbungspool freiwillig ist, keinen Einfluss
                        auf den Bewerbungsprozess hat und Sie jederzeit die
                        Möglichkeit haben, Ihre Einwilligung zu widerrufen. Für
                        den Fall des Schutzes lebenswichtiger Interessen erfolgt
                        die Datenverarbeitung gemäß Art. 9 Abs. 2 lit. c. DSGVO.
                        Für Zwecke der Gesundheitsversorgung, der
                        Arbeitsmedizin, für die medizinische Diagnostik, für die
                        Versorgung oder Behandlung im Gesundheits- oder
                        Sozialbereich oder für die Verwaltung von Systemen und
                        Diensten im Gesundheits- oder Sozialbereich erfolgt die
                        Verarbeitung personenbezogener Daten gemäß Art. 9 Abs. 2
                        lit. h. DSGVO. Wenn Sie freiwillig Daten der besonderen
                        Kategorien mitteilen, erfolgt die Verarbeitung auf
                        Grundlage von Art. 9 Abs. 2 lit. a. DSGVO. Informationen
                        zu den speziellen Recruiting Tools erhalten Sie – sofern
                        vorhanden – in den folgenden Abschnitten. LinkedIn
                        Recruiter Datenschutzerklärung Wir nutzen auf unserer
                        Website das Recruiting Tool LinkedIn Recruiter.
                        Dienstanbieter ist das amerikanische Unternehmen
                        LinkedIn Corporation, 2029 Stierlin Court, Mountain
                        View, CA 94043, USA. LinkedIn verarbeitet Daten von
                        Ihnen u.a. auch in den USA. Wir weisen darauf hin, dass
                        nach Meinung des Europäischen Gerichtshofs derzeit kein
                        angemessenes Schutzniveau für den Datentransfer in die
                        USA besteht. Dies kann mit verschiedenen Risiken für die
                        Rechtmäßigkeit und Sicherheit der Datenverarbeitung
                        einhergehen. Als Grundlage der Datenverarbeitung bei
                        Empfängern mit Sitz in Drittstaaten (außerhalb der
                        Europäischen Union, Island, Liechtenstein, Norwegen,
                        also insbesondere in den USA) oder einer Datenweitergabe
                        dorthin verwendet LinkedIn sogenannte
                        Standardvertragsklauseln (= Art. 46. Abs. 2 und 3
                        DSGVO). Standardvertragsklauseln (Standard Contractual
                        Clauses – SCC) sind von der EU-Kommission
                        bereitgestellte Mustervorlagen und sollen sicherstellen,
                        dass Ihre Daten auch dann den europäischen
                        Datenschutzstandards entsprechen, wenn diese in
                        Drittländer (wie beispielsweise in die USA) überliefert
                        und dort gespeichert werden. Durch diese Klauseln
                        verpflichtet sich LinkedIn, bei der Verarbeitung Ihrer
                        relevanten Daten, das europäische Datenschutzniveau
                        einzuhalten, selbst wenn die Daten in den USA
                        gespeichert, verarbeitet und verwaltet werden. Diese
                        Klauseln basieren auf einem Durchführungsbeschluss der
                        EU-Kommission. Sie finden den Beschluss und die
                        entsprechenden Standardvertragsklauseln u.a. hier:
                        https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de
                        Mehr Informationen zu den Standardvertragsklauseln bei
                        LinkedIn finden Sie unter
                        https://www.linkedin.com/help/linkedin/answer/62538/datenubertragung-aus-der-eu-dem-ewr-und-der-schweiz?lang=de.
                        Mehr über die Daten, die durch die Verwendung von
                        LinkedIn Recruiter verarbeitet werden, erfahren Sie in
                        der Datenschutzerklärung auf
                        https://de.linkedin.com/legal/privacy-policy. Webdesign
                        Einleitung Webdesign Datenschutzerklärung
                        Zusammenfassung 👥 Betroffene: Besucher der Website 🤝
                        Zweck: Verbesserung der Nutzererfahrung 📓 Verarbeitete
                        Daten: Welche Daten verarbeitet werden, hängt stark von
                        den verwendeten Diensten ab. Meist handelt es sich etwa
                        um IP-Adresse, technische Daten, Spracheinstellungen,
                        Browserversion, Bildschirmauflösung und Name des
                        Browsers. Mehr Details dazu finden Sie bei den jeweils
                        eingesetzten Webdesign-Tools. 📅 Speicherdauer: abhängig
                        von den eingesetzten Tools ⚖️ Rechtsgrundlagen: Art. 6
                        Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f
                        DSGVO (Berechtigte Interessen) Was ist Webdesign? Wir
                        verwenden auf unserer Website verschiedene Tools, die
                        unserem Webdesign dienen. Bei Webdesign geht es nicht,
                        wie oft angenommen, nur darum, dass unsere Website
                        hübsch aussieht, sondern auch um Funktionalität und
                        Leistung. Aber natürlich ist die passende Optik einer
                        Website auch eines der großen Ziele professionellen
                        Webdesigns. Webdesign ist ein Teilbereich des
                        Mediendesigns und beschäftigt sich sowohl mit der
                        visuellen als auch der strukturellen und funktionalen
                        Gestaltung einer Website. Ziel ist es mit Hilfe von
                        Webdesign Ihre Erfahrung auf unserer Website zu
                        verbessern. Im Webdesign-Jargon spricht man in diesem
                        Zusammenhang von User-Experience (UX) und Usability.
                        Unter User Experience versteht man alle Eindrücke und
                        Erlebnisse, die der Websitebesucher auf einer Website
                        erfährt. Ein Unterpunkt der User Experience ist die
                        Usability. Dabei geht es um die Nutzerfreundlichkeit
                        einer Website. Wert gelegt wird hier vor allem darauf,
                        dass Inhalte, Unterseiten oder Produkte klar
                        strukturiert sind und Sie leicht und schnell finden,
                        wonach Sie suchen. Um Ihnen die bestmögliche Erfahrung
                        auf unserer Website zu bieten, verwenden wir auch
                        sogenannte Webdesign-Tools von Drittanbietern. Unter die
                        Kategorie „Webdesign“ fallen in dieser
                        Datenschutzerklärung also alle Dienste, die unsere
                        Website gestalterisch verbessern. Das können
                        beispielsweise Schriftarten, diverse Plugins oder andere
                        eingebundene Webdesign-Funktionen sein. Warum verwenden
                        wir Webdesign-Tools? Wie Sie Informationen auf einer
                        Website aufnehmen, hängt sehr stark von der Struktur,
                        der Funktionalität und der visuellen Wahrnehmung der
                        Website ab. Daher wurde auch für uns ein gutes und
                        professionelles Webdesign immer wichtiger. Wir arbeiten
                        ständig an der Verbesserung unserer Website und sehen
                        dies auch als erweiterte Dienstleistung für Sie als
                        Websitebesucher. Weiters hat eine schöne und
                        funktionierende Website auch wirtschaftliche Vorteile
                        für uns. Schließlich werden Sie uns nur besuchen und
                        unsere Angebote in Anspruch nehmen, wenn Sie sich rundum
                        wohl fühlen. Welche Daten werden durch Webdesign-Tools
                        gespeichert? Wenn Sie unsere Website besuchen, können
                        Webdesign-Elemente in unseren Seiten eingebunden sein,
                        die auch Daten verarbeiten können. Um welche Daten es
                        sich genau handelt, hängt natürlich stark von den
                        verwendeten Tools ab. Weiter unter sehen Sie genau,
                        welche Tools wir für unsere Website verwenden. Wir
                        empfehlen Ihnen für nähere Informationen über die
                        Datenverarbeitung auch die jeweilige
                        Datenschutzerklärung der verwendeten Tools durchzulesen.
                        Meistens erfahren Sie dort, welche Daten verarbeitet
                        werden, ob Cookies eingesetzt werden und wie lange die
                        Daten aufbewahrt werden. Durch Schriftarten wie etwa
                        Google Fonts werden beispielsweise auch Informationen
                        wie Spracheinstellungen, IP-Adresse, Version des
                        Browsers, Bildschirmauflösung des Browsers und Name des
                        Browsers automatisch an die Google-Server übertragen.
                        Dauer der Datenverarbeitung Wie lange Daten verarbeitet
                        werden, ist sehr individuell und hängt von den
                        eingesetzten Webdesign-Elementen ab. Wenn Cookies
                        beispielsweise zum Einsatz kommen, kann die
                        Aufbewahrungsdauer nur eine Minute, aber auch ein paar
                        Jahre dauern. Machen Sie sich diesbezüglich bitte
                        schlau. Dazu empfehlen wir Ihnen einerseits unseren
                        allgemeinen Textabschnitt über Cookies sowie die
                        Datenschutzerklärungen der eingesetzten Tools. Dort
                        erfahren Sie in der Regel, welche Cookies genau
                        eingesetzt werden, und welche Informationen darin
                        gespeichert werden. Google-Font-Dateien werden zum
                        Beispiel ein Jahr gespeichert. Damit soll die Ladezeit
                        einer Website verbessert werden. Grundsätzlich werden
                        Daten immer nur so lange aufbewahrt, wie es für die
                        Bereitstellung des Dienstes nötig ist. Bei gesetzlichen
                        Vorschreibungen können Daten auch länger gespeichert
                        werden. Widerspruchsrecht Sie haben auch jederzeit das
                        Recht und die Möglichkeit Ihre Einwilligung zur
                        Verwendung von Cookies bzw. Drittanbietern zu
                        widerrufen. Das funktioniert entweder über unser
                        Cookie-Management-Tool oder über andere
                        Opt-Out-Funktionen. Sie können auch die Datenerfassung
                        durch Cookies verhindern, indem Sie in Ihrem Browser die
                        Cookies verwalten, deaktivieren oder löschen. Unter
                        Webdesign-Elementen (meistens bei Schriftarten) gibt es
                        allerdings auch Daten, die nicht ganz so einfach
                        gelöscht werden können. Das ist dann der Fall, wenn
                        Daten direkt bei einem Seitenaufruf automatisch erhoben
                        und an einen Drittanbieter (wie z. B. Google)
                        übermittelt werden. Wenden Sie sich dann bitte an den
                        Support des entsprechenden Anbieters. Im Fall von Google
                        erreichen Sie den Support unter
                        https://support.google.com/?hl=de. Rechtsgrundlage Wenn
                        Sie eingewilligt haben, dass Webdesign-Tools eingesetzt
                        werden dürfen, ist die Rechtsgrundlage der
                        entsprechenden Datenverarbeitung diese Einwilligung.
                        Diese Einwilligung stellt laut Art. 6 Abs. 1 lit. a
                        DSGVO (Einwilligung) die Rechtsgrundlage für die
                        Verarbeitung personenbezogener Daten, wie sie bei der
                        Erfassung durch Webdesign-Tools vorkommen kann, dar. Von
                        unserer Seite besteht zudem ein berechtigtes Interesse,
                        das Webdesign auf unserer Website zu verbessern.
                        Schließlich können wir Ihnen nur dann ein schönes und
                        professionelles Webangebot liefern. Die dafür
                        entsprechende Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
                        DSGVO (Berechtigte Interessen). Wir setzen
                        Webdesign-Tools gleichwohl nur ein, soweit Sie eine
                        Einwilligung erteilt haben. Das wollen wir hier auf
                        jeden Fall nochmals betonen. Informationen zu speziellen
                        Webdesign-Tools erhalten Sie – sofern vorhanden – in den
                        folgenden Abschnitten. Google Fonts Datenschutzerklärung
                        Google Fonts Datenschutzerklärung Zusammenfassung 👥
                        Betroffene: Besucher der Website 🤝 Zweck: Optimierung
                        unserer Serviceleistung 📓 Verarbeitete Daten: Daten wie
                        etwa IP-Adresse und CSS- und Schrift-Anfragen Mehr
                        Details dazu finden Sie weiter unten in dieser
                        Datenschutzerklärung. 📅 Speicherdauer: Font-Dateien
                        werden bei Google ein Jahr gespeichert ⚖️
                        Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO
                        (Einwilligung), Art. 6 Abs. 1 lit. f DSGVO (Berechtigte
                        Interessen) Was sind Google Fonts? Auf unserer Website
                        verwenden wir Google Fonts. Das sind die
                        “Google-Schriften” der Firma Google Inc. Für den
                        europäischen Raum ist das Unternehmen Google Ireland
                        Limited (Gordon House, Barrow Street Dublin 4, Irland)
                        für alle Google-Dienste verantwortlich. Für die
                        Verwendung von Google-Schriftarten müssen Sie sich nicht
                        anmelden bzw. ein Passwort hinterlegen. Weiters werden
                        auch keine Cookies in Ihrem Browser gespeichert. Die
                        Dateien (CSS, Schriftarten/Fonts) werden über die
                        Google-Domains fonts.googleapis.com und
                        fonts.gstatic.com angefordert. Laut Google sind die
                        Anfragen nach CSS und Schriften vollkommen getrennt von
                        allen anderen Google-Diensten. Wenn Sie ein Google-Konto
                        haben, brauchen Sie keine Sorge haben, dass Ihre
                        Google-Kontodaten, während der Verwendung von Google
                        Fonts, an Google übermittelt werden. Google erfasst die
                        Nutzung von CSS (Cascading Style Sheets) und der
                        verwendeten Schriftarten und speichert diese Daten
                        sicher. Wie die Datenspeicherung genau aussieht, werden
                        wir uns noch im Detail ansehen. Google Fonts (früher
                        Google Web Fonts) ist ein Verzeichnis mit über 800
                        Schriftarten, die Google Ihren Nutzern kostenlos zu
                        Verfügung stellen. Viele dieser Schriftarten sind unter
                        der SIL Open Font License veröffentlicht, während andere
                        unter der Apache-Lizenz veröffentlicht wurden. Beides
                        sind freie Software-Lizenzen. Warum verwenden wir Google
                        Fonts auf unserer Website? Mit Google Fonts können wir
                        auf der eigenen Webseite Schriften nutzen, und müssen
                        sie nicht auf unserem eigenen Server hochladen. Google
                        Fonts ist ein wichtiger Baustein, um die Qualität
                        unserer Webseite hoch zu halten. Alle Google-Schriften
                        sind automatisch für das Web optimiert und dies spart
                        Datenvolumen und ist speziell für die Verwendung bei
                        mobilen Endgeräten ein großer Vorteil. Wenn Sie unsere
                        Seite besuchen, sorgt die niedrige Dateigröße für eine
                        schnelle Ladezeit. Des Weiteren sind Google Fonts
                        sichere Web Fonts. Unterschiedliche Bildsynthese-Systeme
                        (Rendering) in verschiedenen Browsern, Betriebssystemen
                        und mobilen Endgeräten können zu Fehlern führen. Solche
                        Fehler können teilweise Texte bzw. ganze Webseiten
                        optisch verzerren. Dank des schnellen Content Delivery
                        Network (CDN) gibt es mit Google Fonts keine
                        plattformübergreifenden Probleme. Google Fonts
                        unterstützt alle gängigen Browser (Google Chrome,
                        Mozilla Firefox, Apple Safari, Opera) und funktioniert
                        zuverlässig auf den meisten modernen mobilen
                        Betriebssystemen, einschließlich Android 2.2+ und iOS
                        4.2+ (iPhone, iPad, iPod). Wir verwenden die Google
                        Fonts also, damit wir unser gesamtes Online-Service so
                        schön und einheitlich wie möglich darstellen können.
                        Welche Daten werden von Google gespeichert? Wenn Sie
                        unsere Webseite besuchen, werden die Schriften über
                        einen Google-Server nachgeladen. Durch diesen externen
                        Aufruf werden Daten an die Google-Server übermittelt. So
                        erkennt Google auch, dass Sie bzw. Ihre IP-Adresse
                        unsere Webseite besucht. Die Google Fonts API wurde
                        entwickelt, um Verwendung, Speicherung und Erfassung von
                        Endnutzerdaten auf das zu reduzieren, was für eine
                        ordentliche Bereitstellung von Schriften nötig ist. API
                        steht übrigens für „Application Programming Interface“
                        und dient unter anderem als Datenübermittler im
                        Softwarebereich. Google Fonts speichert CSS- und
                        Schrift-Anfragen sicher bei Google und ist somit
                        geschützt. Durch die gesammelten Nutzungszahlen kann
                        Google feststellen, wie gut die einzelnen Schriften
                        ankommen. Die Ergebnisse veröffentlicht Google auf
                        internen Analyseseiten, wie beispielsweise Google
                        Analytics. Zudem verwendet Google auch Daten des eigenen
                        Web-Crawlers, um festzustellen, welche Webseiten
                        Google-Schriften verwenden. Diese Daten werden in der
                        BigQuery-Datenbank von Google Fonts veröffentlicht.
                        Unternehmer und Entwickler nützen das Google-Webservice
                        BigQuery, um große Datenmengen untersuchen und bewegen
                        zu können. Zu bedenken gilt allerdings noch, dass durch
                        jede Google Font Anfrage auch Informationen wie
                        Spracheinstellungen, IP-Adresse, Version des Browsers,
                        Bildschirmauflösung des Browsers und Name des Browsers
                        automatisch an die Google-Server übertragen werden. Ob
                        diese Daten auch gespeichert werden, ist nicht klar
                        feststellbar bzw. wird von Google nicht eindeutig
                        kommuniziert. Wie lange und wo werden die Daten
                        gespeichert? Anfragen für CSS-Assets speichert Google
                        einen Tag lang auf seinen Servern, die hauptsächlich
                        außerhalb der EU angesiedelt sind. Das ermöglicht uns,
                        mithilfe eines Google-Stylesheets die Schriftarten zu
                        nutzen. Ein Stylesheet ist eine Formatvorlage, über die
                        man einfach und schnell z.B. das Design bzw. die
                        Schriftart einer Webseite ändern kann. Die Font-Dateien
                        werden bei Google ein Jahr gespeichert. Google verfolgt
                        damit das Ziel, die Ladezeit von Webseiten grundsätzlich
                        zu verbessern. Wenn Millionen von Webseiten auf die
                        gleichen Schriften verweisen, werden sie nach dem ersten
                        Besuch zwischengespeichert und erscheinen sofort auf
                        allen anderen später besuchten Webseiten wieder.
                        Manchmal aktualisiert Google Schriftdateien, um die
                        Dateigröße zu reduzieren, die Abdeckung von Sprache zu
                        erhöhen und das Design zu verbessern. Wie kann ich meine
                        Daten löschen bzw. die Datenspeicherung verhindern? Jene
                        Daten, die Google für einen Tag bzw. ein Jahr speichert
                        können nicht einfach gelöscht werden. Die Daten werden
                        beim Seitenaufruf automatisch an Google übermittelt. Um
                        diese Daten vorzeitig löschen zu können, müssen Sie den
                        Google-Support auf
                        https://support.google.com/?hl=de&tid=312396647
                        kontaktieren. Datenspeicherung verhindern Sie in diesem
                        Fall nur, wenn Sie unsere Seite nicht besuchen. Anders
                        als andere Web-Schriften erlaubt uns Google
                        uneingeschränkten Zugriff auf alle Schriftarten. Wir
                        können also unlimitiert auf ein Meer an Schriftarten
                        zugreifen und so das Optimum für unsere Webseite
                        rausholen. Mehr zu Google Fonts und weiteren Fragen
                        finden Sie auf
                        https://developers.google.com/fonts/faq?tid=312396647.
                        Dort geht zwar Google auf datenschutzrelevante
                        Angelegenheiten ein, doch wirklich detaillierte
                        Informationen über Datenspeicherung sind nicht
                        enthalten. Es ist relativ schwierig, von Google wirklich
                        präzise Informationen über gespeicherten Daten zu
                        bekommen. Rechtsgrundlage Wenn Sie eingewilligt haben,
                        dass Google Fonts eingesetzt werden darf, ist die
                        Rechtsgrundlage der entsprechenden Datenverarbeitung
                        diese Einwilligung. Diese Einwilligung stellt laut Art.
                        6 Abs. 1 lit. a DSGVO (Einwilligung) die Rechtsgrundlage
                        für die Verarbeitung personenbezogener Daten, wie sie
                        bei der Erfassung durch Google Fonts vorkommen kann,
                        dar. Von unserer Seite besteht zudem ein berechtigtes
                        Interesse, Google Font zu verwenden, um unser
                        Online-Service zu optimieren. Die dafür entsprechende
                        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
                        (Berechtigte Interessen). Wir setzen Google Font
                        gleichwohl nur ein, soweit Sie eine Einwilligung erteilt
                        haben. Google verarbeitet Daten von Ihnen u.a. auch in
                        den USA. Wir weisen darauf hin, dass nach Meinung des
                        Europäischen Gerichtshofs derzeit kein angemessenes
                        Schutzniveau für den Datentransfer in die USA besteht.
                        Dies kann mit verschiedenen Risiken für die
                        Rechtmäßigkeit und Sicherheit der Datenverarbeitung
                        einhergehen. Als Grundlage der Datenverarbeitung bei
                        Empfängern mit Sitz in Drittstaaten (außerhalb der
                        Europäischen Union, Island, Liechtenstein, Norwegen,
                        also insbesondere in den USA) oder einer Datenweitergabe
                        dorthin verwendet Google sogenannte
                        Standardvertragsklauseln (= Art. 46. Abs. 2 und 3
                        DSGVO). Standardvertragsklauseln (Standard Contractual
                        Clauses – SCC) sind von der EU-Kommission
                        bereitgestellte Mustervorlagen und sollen sicherstellen,
                        dass Ihre Daten auch dann den europäischen
                        Datenschutzstandards entsprechen, wenn diese in
                        Drittländer (wie beispielsweise in die USA) überliefert
                        und dort gespeichert werden. Durch diese Klauseln
                        verpflichtet sich Google, bei der Verarbeitung Ihrer
                        relevanten Daten, das europäische Datenschutzniveau
                        einzuhalten, selbst wenn die Daten in den USA
                        gespeichert, verarbeitet und verwaltet werden. Diese
                        Klauseln basieren auf einem Durchführungsbeschluss der
                        EU-Kommission. Sie finden den Beschluss und die
                        entsprechenden Standardvertragsklauseln u.a. hier:
                        https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de
                        Die Google Ads Datenverarbeitungsbedingungen (Google Ads
                        Data Processing Terms), welche auch den
                        Standardvertragsklauseln für Google Fonts entsprechen,
                        finden Sie unter
                        https://business.safety.google/adsprocessorterms/.
                        Welche Daten grundsätzlich von Google erfasst werden und
                        wofür diese Daten verwendet werden, können Sie auch auf
                        https://www.google.com/intl/de/policies/privacy/
                        nachlesen. Google Fonts Lokal Datenschutzerklärung Auf
                        unserer Website nutzen wir Google Fonts der Firma Google
                        Inc. Für den europäischen Raum ist das Unternehmen
                        Google Ireland Limited (Gordon House, Barrow Street
                        Dublin 4, Irland) verantwortlich. Wir haben die
                        Google-Schriftarten lokal, d.h. auf unserem Webserver –
                        nicht auf den Servern von Google – eingebunden. Dadurch
                        gibt es keine Verbindung zu Google-Servern und somit
                        auch keine Datenübertragung oder Speicherung. Was sind
                        Google Fonts? Früher nannte man Google Fonts auch Google
                        Web Fonts. Dabei handelt es sich um ein interaktives
                        Verzeichnis mit über 800 Schriftarten, die Google
                        kostenlos bereitstellt. Mit Google Fonts könnte man
                        Schriften nutzen, ohne sie auf den eigenen Server
                        hochzuladen. Doch um diesbezüglich jede
                        Informationsübertragung zu Google-Servern zu
                        unterbinden, haben wir die Schriftarten auf unseren
                        Server heruntergeladen. Auf diese Weise handeln wir
                        datenschutzkonform und senden keine Daten an Google
                        Fonts weiter. Alle Texte sind urheberrechtlich
                        geschützt. Quelle: Erstellt mit dem Datenschutz
                        Generator von AdSimple
                    </p>
                </section>
                <div className='test' />
            </article>
        </div>
    );
}

export default Footer;
