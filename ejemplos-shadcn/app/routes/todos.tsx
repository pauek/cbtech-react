import { Trash2 } from "lucide-react"
import { useRef, useState } from "react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "~/components/ui/item"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"
import { Checkbox } from "~/components/ui/checkbox"
import { cn } from "~/lib/utils"

type TodoItem = {
  what: string
  done: boolean
}

export default function Todos() {
  const [todos, setTodos] = useState<TodoItem[]>([])
  const inputRef = useRef<HTMLInputElement | null>(null)

  const addItem = (e: Event) => {
    e.preventDefault()
    if (inputRef.current === null) {
      return
    }
    const what = inputRef.current.value
    setTodos((prevTodos) => [...prevTodos, { what, done: false }])
    inputRef.current.value = ""
  }

  const deleteItem = (i: number) => () => {
    setTodos((prevTodos) => prevTodos.filter((_, j) => i != j))
  }

  const toggleTodo = (i: number) => (checked: boolean) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, j) => {
        if (i === j) {
          return { ...todo, done: checked }
        } else {
          return todo
        }
      })
    )
  }

  return (
    <main className="p-4">
      <h1>Todos</h1>

      <form onSubmit={addItem} className="flex flex-row gap-2">
        <Input
          type="text"
          name="what"
          ref={inputRef}
          className="w-60"
          placeholder="What is to be done..."
        />
        <Button>Add</Button>
      </form>
      <div className="mt-4 flex w-80 flex-col gap-1">
        {todos.map((todo, i) => (
          <Item key={todo.what + i} className="px-2.5 py-1" variant="muted">
            <ItemContent>
              <ItemTitle className="flex flex-row gap-2">
                <Checkbox checked={todo.done} onCheckedChange={toggleTodo(i)} />
                <span
                  className={cn(todo.done ? "line-through" : "")}
                >
                  {todo.what}
                </span>
              </ItemTitle>
            </ItemContent>
            <ItemActions>
              <Dialog modal={true}>
                <DialogTrigger asChild>
                  <Button size="icon-xs" variant="ghost">
                    <Trash2 />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Delete "{todo.what}"?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="flex flex-row justify-end">
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <DialogClose asChild>
                      <Button onClick={deleteItem(i)}>Delete</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </ItemActions>
          </Item>
        ))}
      </div>
    </main>
  )
}
