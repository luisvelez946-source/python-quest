<script>
LEVEL_CONTENT[3] = {
    title: "El sistema decide",
    description: "La estación ya almacena datos. Ahora necesita analizar condiciones y tomar decisiones seguras.",
    challenges: [
        { id: "L3-01", type: "lesson", label: "DESCUBRE", icon: "🧠", title: "Una condición guía al sistema", content: `<p>Una comparación produce un valor booleano: <strong>True</strong> o <strong>False</strong>. Con ese resultado, el programa decide qué hacer.</p><pre class="code-block"><code>temperatura = 35

if temperatura > 30:
    print("Temperatura alta")</code></pre><div class="tip-box">💡 Los cuatro espacios antes de <code>print()</code> no son decoración: indican que esa instrucción pertenece al <code>if</code>.</div>` },
        { id: "L3-02", type: "choice", label: "OBSERVA", icon: "🔍", title: "Asignar no es comparar", question: "¿Cuál condición pregunta correctamente si temperatura vale 30?", options: ["temperatura = 30", "temperatura == 30", "temperatura != 30", "temperatura >= 30"], correct: 1, xp: 10, correctFeedback: "Exacto. = asigna un valor; == compara dos valores.", incorrectFeedback: "Distingue entre guardar un valor y formular una pregunta." },
        { id: "L3-03", type: "choice", label: "PREDICE", icon: "🌡️", title: "Lectura de sensores", question: "¿Qué resultado produce la expresión temperatura >= 30?", code: `temperatura = 30`, options: ["True", "False", "30", "Error"], correct: 0, xp: 10, correctFeedback: "Correcto. >= incluye el valor límite.", incorrectFeedback: "Lee el símbolo: mayor o igual incluye el 30." },
        { id: "L3-04", type: "choice", label: "SINTAXIS", icon: "📐", title: "Bloque correcto", question: "¿Qué versión tiene la sintaxis e indentación correctas?", options: [`if voltaje < 3.2:
print("Recargar")`, `if voltaje < 3.2
    print("Recargar")`, `if voltaje < 3.2:
    print("Recargar")`, `if voltaje < 3.2:
    print("Recargar")
else:
print("Disponible")`], correct: 2, xp: 10, correctFeedback: "Sí. La condición termina en : y el bloque tiene indentación consistente.", incorrectFeedback: "Revisa los dos puntos y cada bloque que debe quedar indentado." },
        { id: "L3-05", type: "accessLab", label: "EXPERIMENTA", icon: "🔐", title: "Sistema de acceso", xp: 20, correctFeedback: "Comprendiste que el acceso exige las tres condiciones al mismo tiempo.", incorrectFeedback: "La regla requiere tarjeta Y contraseña Y que no esté bloqueado." },
        { id: "L3-06", type: "choice", label: "ANALIZA", icon: "📊", title: "Estados de temperatura", question: "Con temperatura = 30, ¿qué mostrará el programa?", code: `if temperatura < 18:
    print("Baja")
elif temperatura <= 30:
    print("Normal")
else:
    print("Alta")`, options: ["Baja", "Normal", "Alta", "Nada"], correct: 1, xp: 10, correctFeedback: "Correcto. El primer if falla, pero 30 sí cumple <= 30.", incorrectFeedback: "El programa evalúa las condiciones en orden; prueba mentalmente el valor 30." },
        { id: "L3-07", type: "choice", label: "DEPURA", icon: "🛠️", title: "La puerta demasiado abierta", question: "Un estudiante solo ingresa si tiene tarjeta. ¿Cuál condición corrige el fallo?", code: `usuario = "estudiante"
tarjeta = False

if usuario == "estudiante" or tarjeta:
    print("Acceso permitido")`, options: [`usuario == "estudiante" and tarjeta`, `usuario == "estudiante" or tarjeta`, "not tarjeta", "usuario = estudiante"], correct: 0, xp: 10, correctFeedback: "Bien. and obliga a que ambas condiciones sean verdaderas.", incorrectFeedback: "La regla dice que ser estudiante no basta: también se necesita tarjeta." },
        { id: "L3-08", type: "builder", label: "DEMUESTRA", icon: "🏆", title: "Alerta de batería", question: "Construye una regla que muestre una advertencia cuando el voltaje sea menor que 3.2.", pieces: [{ id: "if", text: `if voltaje < 3.2:` }, { id: "print", text: `    print("Advertencia")` }, { id: "wrong", text: `if voltaje = 3.2:` }, { id: "outside", text: `print("Advertencia")` }], expected: ["if", "print"], xp: 20, correctFeedback: "Sistema reparado. La condición y su bloque están correctamente construidos.", incorrectFeedback: "La condición necesita comparación, dos puntos y una instrucción indentada dentro del bloque." }
    ]
};
</script>
