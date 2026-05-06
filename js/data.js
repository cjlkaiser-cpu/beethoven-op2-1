// Beethoven · Sonata n.º 1, Op. 2 n.º 1 · I. Allegro
// Fa menor · 2/4 · Forma sonata
// Análisis: sinfonismos.com — imágenes anotadas del artículo (descargadas localmente)
//
// ESTRUCTURA:
//   Exposición   cc. 1–48    (Tema A · Transición · Tema B · Cierre)
//   Desarrollo   cc. 49–94   (Zona 1 · Zona 2 · Pedal · Falsa reexpo)
//   Reexposición cc. 95–145  (Tema A · Transición · Tema B)
//   Coda         cc. 146–152

const PASAJES = [

    // ── EXPOSICIÓN ───────────────────────────────────────────────────────────
    {
        numero: 1,
        titulo: "Exposición · Tema A (a1)",
        compases: "1–14",
        imagen: "img/score-01.png",
        imagen2: "img/sinf_2.png",
        texto: "Tema A en Fa menor: carácter anacrusico, staccato y ascendente. Estructura interna 2+2+4 (Método 1-2-3 de Bernstein). La armonía acelera hacia el final de la frase creando impulso direccional; el bajo sincopado genera energía rítmica. La frase concluye en semicadencia (función suspensiva). Un silencio dramático separa el Tema A de la Transición. La imagen anotada muestra la frase completa a1 con el Método 1-2-3 señalado con flechas.",
        seccion: "exposicion"
    },
    {
        numero: 2,
        titulo: "Exposición · Transición",
        compases: "15–23",
        imagen: "img/score-01.png",
        imagen2: "img/sinf_4.png",
        texto: "La transición retoma el elemento rítmico del Tema A pero lo desvía tonalmente hacia Mi♭ mayor (dominante de La♭). En el c. 15 aparece la línea descendente Mi♭-Re♭-Do-Si♭-La♭-Sol (Método 1-2-3) repetida tres veces, llegando a Re♭ como punto de inflexión. Progresión armónica siguiendo el círculo de quintas en el bajo con acordes de séptima que crean inestabilidad. Desemboca en un pedal de dominante que introduce el Tema B.",
        seccion: "exposicion"
    },
    {
        numero: 3,
        titulo: "Exposición · Tema B (b1)",
        compases: "24–32",
        imagen: "img/score-02.png",
        imagen2: "img/sinf_6.png",
        texto: "Tema B sobre pedal de dominante (Mi♭) en La♭ mayor. Contraste total con el Tema A: carácter descendente y legato frente al ascendente y staccato. Estructura Método 1-2-3. Armonía estable alternando tónica y dominante. El Re♭♭ inicial (novena menor del acorde de dominante) funciona como apoyatura que resuelve a Re♭ — detalle expresivo característico de Beethoven. Los cc. 28-32 amplían el material de apertura.",
        seccion: "exposicion"
    },
    {
        numero: 4,
        titulo: "Exposición · Tema B (b2) y Cierre",
        compases: "33–48",
        imagen: "img/score-02.png",
        imagen2: "img/sinf_7.png",
        texto: "b2 en La♭ mayor, estructura 4+4. Cada semifrase sigue el esquema 1+1+2 (Método 1-2-3). El sforzato —sello beethoveniano— aporta energía e impulso. Las dos semifrases funcionan como procesos cadenciales independientes: I–IV(II)–I64. Sección de Cierre (c. 41+): nuevo motivo derivado de b1 con carácter conclusivo, intervalo de quinta justa (Re♭-La♭), cadencia auténtica repetida en posición métrica fuerte.",
        seccion: "exposicion"
    },

    // ── DESARROLLO ───────────────────────────────────────────────────────────
    {
        numero: 5,
        titulo: "Desarrollo · Zona 1 — intercambio modal",
        compases: "49–65",
        imagen: "img/score-03.png",
        imagen2: "img/sinf_9.png",
        texto: "El Desarrollo arranca con a1 en La♭ mayor (intercambio modal: el Fa menor original se convierte en arpegio de La♭ mayor). Las armonías sincopadas reaparecen atacadas en tiempo débil. Sigue b1 en Si♭ menor con largo pedal de dominante y la apoyatura de novena menor característica. Modulación a Do menor mediante acordes de sexta aumentada (tipo alemán) funcionando como dominante de la dominante.",
        seccion: "desarrollo"
    },
    {
        numero: 6,
        titulo: "Desarrollo · Zona 2 — Do menor y pedal",
        compases: "66–94",
        imagen: "img/score-03.png",
        imagen2: "img/sinf_11.png",
        texto: "Do menor se establece con un largo pedal de V en octavas (tremolo de murky bass, cc. 63–66). El material de b1 reaparece con la melodía en el bajo y el acompañamiento en la mano derecha. El bajo asciende La♭–Si♭–Si–Do (cc. 78–81) para preparar el clímax. Punto de máxima tensión (cc. 88–92): pedal de dominante en Do con acordes de dominante de la dominante. Típico del desarrollo beethoveniano.",
        seccion: "desarrollo"
    },
    {
        numero: 7,
        titulo: "Desarrollo · Falsa Reexposición",
        compases: "95–105",
        imagen: "img/score-04.png",
        imagen2: "img/sinf_14.png",
        texto: "C. 95: falsa reexposición — el Tema A reaparece sugiriendo el fin del desarrollo, pero aún no en el contexto tonal correcto (la tensión no se ha resuelto definitivamente). Cc. 94–95: breve transición con figura de tresillos que recuerda la transición de la Exposición. Línea ascendente siguiendo la escala menor melódica (en la octava central del piano) que traza el camino final hacia la Reexposición.",
        seccion: "desarrollo"
    },

    // ── REEXPOSICIÓN ─────────────────────────────────────────────────────────
    {
        numero: 8,
        titulo: "Reexposición · Tema A y Transición",
        compases: "106–125",
        imagen: "img/score-04.png",
        imagen2: "img/sinf_15.png",
        texto: "El Tema A regresa en Fa menor con variación: los acordes finales se desplazan del tiempo débil al tiempo fuerte. Silencio estructural equivalente al de la Exposición. La Transición de la Reexposición, según el canon de la forma sonata, debe llevar el Tema B también a Fa menor (no a La♭). Beethoven introduce una nueva conclusión con pedal de dominante y ritmo armónico acelerado. Cadencia 64→VI (cadencia evitada como rota) y acorde de sexta aumentada italiana que enfatiza el V de inicio del Tema B.",
        seccion: "reexposicion"
    },
    {
        numero: 9,
        titulo: "Reexposición · Tema B",
        compases: "126–145",
        imagen: "img/score-05.png",
        imagen2: "img/sinf_17.png",
        texto: "El Tema B reaparece sin cambios melódicos pero transpuesto: ahora en Fa menor (antes en La♭ mayor). La apoyatura Re♭♭ de la Exposición se convierte en Re♭ diatónico de Fa menor — mismo gesto expresivo, distinto tratamiento notacional. Todo el material de b1, b2 y el Cierre se reexpone en la tonalidad principal, cumpliendo el principio fundamental de la forma sonata.",
        seccion: "reexposicion"
    },

    // ── CODA ─────────────────────────────────────────────────────────────────
    {
        numero: 10,
        titulo: "Coda Final",
        compases: "146–152",
        imagen: "img/score-05.png",
        imagen2: "img/sinf_18.png",
        texto: "La sección de Cierre se amplía a partir del c. 147. Dos desviaciones armónicas notables: c. 146, cadencia evitada (el V7 esperado resuelve sobre la dominante del IV en lugar de la tónica); c. 148, desvío a III (La♭ mayor, tonalidad del Tema B en la Exposición). Desde el c. 150 vuelve el proceso cadencial de Fa menor con el acorde II con séptima diatónica. Textura homofónica de acordes en bloque — efecto de tutti orquestal. El movimiento concluye con la tonalidad de Fa menor plenamente reafirmada.",
        seccion: "coda"
    }
];
