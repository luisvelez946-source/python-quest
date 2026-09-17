LEVEL_CONTENT[2] = {
    title: "Fábrica Alpina: Control de Calidad y Monitoreo",
    description: "Analizarás lotes de producción, lecturas de sensores térmicos y automatizarás decisiones de planta mediante control de flujo.",
    challenges: [
        { 
            id: "L2-01", 
            type: "lesson", 
            label: "DESCUBRE", 
            icon: "🥛", 
            title: "Control Térmico y Colecciones de Sensores", 
            content: `<p>En la planta de pasteurización de Alpina, el monitoreo constante evita pérdidas de materia prima.</p>
            <div class="concept-grid">
                <div class="concept-item"><strong>if-elif-else</strong><span>Toma de decisiones según rangos</span></div>
                <div class="concept-item"><strong>for</strong><span>Iteración sobre lecturas de sensores</span></div>
                <div class="concept-item"><strong>while</strong><span>Procesamiento continuo hasta alerta</span></div>
                <div class="concept-item"><strong>list [ ]</strong><span>Historial ordenado de temperaturas</span></div>
            </div>
            <pre class="code-block"><code>lecturas = [72, 68, 85, 70]
for temp in lecturas:
    if temp > 80:
        print("🚨 Alerta Crítica: Tanque sobrecalentado")
    else:
        print("✅ Operación Nominal")</code></pre>
            <div class="tip-box">💡 Los condicionales dentro de bucles permiten filtrar anomalías en tiempo real sobre miles de datos industriales.</div>` 
        },
        { 
            id: "L2-02", 
            type: "choice", 
            label: "OBSERVA", 
            icon: "🔎", 
            title: "Evaluación de Rangos de Operación", 
            question: "Si la temperatura ideal del tanque está entre 68°C y 78°C, ¿cuál es la estructura lógica correcta para validar que 'temp' sea segura?", 
            options: [
                "if temp == 68 and temp == 78:", 
                "if 68 <= temp <= 78:", 
                "if temp > 68 or temp < 78:", 
                "if temp == 68 to 78:"
            ], 
            correct: 1, 
            xp: 10, 
            correctFeedback: "¡Excelente! La comparación encadenada 68 <= temp <= 78 evalúa perfectamente el rango inclusivo.", 
            incorrectFeedback: "Revisa cómo evaluar un rango inclusivo donde la variable debe ser simultáneamente mayor/igual al límite inferior y menor/igual al superior." 
        },
        { 
            id: "L2-03", 
            type: "choice", 
            label: "RESUELVE", 
            icon: "⚙️", 
            title: "Conteo de Alertas en Lotes", 
            question: "Analizas la lista lecturas = [75, 82, 69, 90, 71]. ¿Cuántas veces se ejecuta el bloque dentro del 'if temp > 80:'?", 
            options: ["1 vez", "2 veces", "3 veces", "5 veces"], 
            correct: 1, 
            xp: 10, 
            correctFeedback: "Correcto. Los valores 82 y 90 son mayores a 80, por lo que el bloque interno se ejecuta 2 veces.", 
            incorrectFeedback: "Cuenta cuántos elementos dentro de la lista superan estrictamente el valor de 80." 
        },
        { 
            id: "L2-04", 
            type: "choice", 
            label: "PREDICE", 
            icon: "🏭", 
            title: "Control de Carga en Tolva", 
            question: "Un bucle 'while peso < 1000:' llena un contenedor de leche en polvo. Si el incremento de peso dentro del bucle no se actualiza, ¿qué ocurre con el sistema?", 
            options: [
                "El programa termina inmediatamente.", 
                "Se genera un bucle infinito y se bloquea el servidor.", 
                "Python asigna 1000 automáticamente a la variable peso.", 
                "El bucle se convierte en un condicional 'if'."
            ], 
            correct: 1, 
            xp: 10, 
            correctFeedback: "Muy bien. Si la variable de control nunca cambia, la condición sigue siendo verdadera por siempre.", 
            incorrectFeedback: "Piensa qué le ocurre a la condición si la variable 'peso' no se modifica dentro del bucle." 
        },
        { 
            id: "L2-05", 
            type: "choice", 
            label: "DEPURA", 
            icon: "🛠️", 
            title: "Identificación de Anomalías", 
            question: "Quieres detener la inspección inmediatamente cuando encuentres un lote contaminado ('CRÍTICO'). ¿Qué instrucción usas dentro del bucle?", 
            options: ["continue", "pass", "break", "exit()"], 
            correct: 2, 
            xp: 10, 
            correctFeedback: "Exacto. 'break' interrumpe y sale de inmediato del bucle al detectar la falla.", 
            incorrectFeedback: "'continue' salta a la siguiente iteración; busca la instrucción para salir inmediatamente del bucle." 
        },
        { 
            id: "L2-06", 
            type: "choice", 
            label: "DEMUESTRA", 
            icon: "🏆", 
            title: "Sintaxis de Bucle Sobre Listas", 
            question: "¿Cuál es la forma pythónica de recorrer elemento por elemento la lista 'lotes_produccion'?", 
            options: [
                "for i in range(lotes_produccion):", 
                "for lote in lotes_produccion:", 
                "foreach lote in lotes_produccion:", 
                "while lotes_produccion.hasNext():"
            ], 
            correct: 1, 
            xp: 20, 
            correctFeedback: "¡Misión completada! 'for elemento in coleccion:' es la sintaxis nativa y limpia de Python.", 
            incorrectFeedback: "Recuerda que Python no requiere sintaxis estilo Java/C# como foreach o hasNext()." 
        }
    ]
};