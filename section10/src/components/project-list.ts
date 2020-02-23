/// <reference path="base.ts" />
/// <reference path="../decorators/autobind.ts" />
/// <reference path="../models/drag-drop.ts" />
/// <reference path="../models/project.ts" />
/// <reference path="../state/project.ts" />

namespace App {
    export class ProjectList
        extends Component<HTMLDivElement, HTMLElement>
        implements DragTarget {

        assignedProjects: Project[];

        constructor(private type: 'active' | 'finished') {
            super('project-list', 'app', false, `${type}-projects`);
            this.assignedProjects = [];

            this.configure();
            this.renderContent();
        }

        private renderProjects() {
            const listEl = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement;
            listEl.innerHTML = '';
            this.assignedProjects.forEach(project => {
                new ProjectItem(this.element.querySelector('ul')!.id, project);
            });
        }

        @Autobind
        dragOverHandler(event: DragEvent): void {
            if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
                event.preventDefault();
                const listEl = this.element.querySelector('ul')!;
                listEl.classList.add('droppable');
            }
        }

        @Autobind
        dropHandler(event: DragEvent): void {
            const projectId = event.dataTransfer!.getData('text/plain');
            projectState.moveProject(
                projectId,
                this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished
            )
        }

        @Autobind
        dragLeaveHandler(_: DragEvent): void {
            const listEl = this.element.querySelector('ul')!;
            listEl.classList.remove('droppable');
        }

        configure(): void {
            this.element.addEventListener('dragover', this.dragOverHandler);
            this.element.addEventListener('dragleave', this.dragLeaveHandler);
            this.element.addEventListener('drop', this.dropHandler);


            projectState.addListener((projects: Project[]) => {
                this.assignedProjects = projects.filter((project => {
                    if (this.type === 'active') {
                        return project.state === ProjectStatus.Active;
                    } else {
                        return project.state === ProjectStatus.Finished;
                    }
                }));
                this.renderProjects();
            });
        }

        renderContent() {
            const listId = `${this.type}-projects-list`;
            this.element.querySelector('ul')!.id = listId;
            this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + ' PROJECTS';
        }
    }
}
