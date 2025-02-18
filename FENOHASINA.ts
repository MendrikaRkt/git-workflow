// Définition d'une interface pour les tâches
interface Task {
    id: number;
    title: string;
    completed: boolean;
}

// Classe pour gérer la liste des tâches
class TodoList {
    private tasks: Task[] = [];
    private nextId: number = 1;

    // Ajouter une nouvelle tâche
    addTask(title: string): void {
        const newTask: Task = {
            id: this.nextId++,
            title,
            completed: false
        };
        this.tasks.push(newTask);
        console.log(`✅ Tâche ajoutée : "${title}"`);
    }

    // Marquer une tâche comme terminée
    completeTask(id: number): void {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = true;
            console.log(`✔️ Tâche terminée : "${task.title}"`);
        } else {
            console.log(`❌ Tâche introuvable avec l'ID : ${id}`);
        }
    }

    // Afficher toutes les tâches
    listTasks(): void {
        console.log("📋 Liste des tâches :");
        this.tasks.forEach(task => {
            console.log(`[${task.completed ? "✔️" : "❌"}] ${task.id}: ${task.title}`);
        });
    }
}

// Utilisation de la classe TodoList
const myTodoList = new TodoList();
myTodoList.addTask("Apprendre TypeScript");
myTodoList.addTask("Créer une application en TS");
myTodoList.listTasks();
myTodoList.completeTask(1);
myTodoList.listTasks();
